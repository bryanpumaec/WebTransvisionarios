import { FirebaseOptions } from '@angular/fire/app';

export const environment = {
  production: false,
  // Mismo proyecto de Firebase que producción por ahora. Si en el futuro se
  // crea un proyecto de Firebase separado para desarrollo/staging, su config
  // va aquí.
  firebase: {
    projectId: 'transvisionarioscloud01',
    appId: '1:649656379507:web:b45c7718cfbc2d90df2206',
    storageBucket: 'transvisionarioscloud01.firebasestorage.app',
    apiKey: 'AIzaSyAfWaKvEHjpcGPikFWeVxo1spaZht9v-vk',
    authDomain: 'transvisionarioscloud01.firebaseapp.com',
    messagingSenderId: '649656379507',
    measurementId: 'G-7DGTR03NH8',
  } satisfies FirebaseOptions,
};
