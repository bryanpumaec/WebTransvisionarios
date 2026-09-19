import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());

/**
 * Recibe el formulario de contacto.
 *
 * TODO: esto solo valida y registra el mensaje en el log del servidor.
 * Falta conectar el envío real (SMTP/Resend/CRM, etc.) — pendiente de
 * definir con el cliente qué servicio de correo/CRM usar.
 */
app.post('/api/contacto', (req, res) => {
  const { nombre, email, telefono, comentario } = req.body ?? {};

  if (!nombre || !email || !telefono || !comentario) {
    res.status(400).json({ ok: false, error: 'Faltan campos obligatorios.' });
    return;
  }

  console.log('[contacto] nuevo mensaje recibido:', req.body);
  res.json({ ok: true });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
