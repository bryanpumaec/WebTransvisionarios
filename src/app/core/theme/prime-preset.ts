import { definePreset } from '@primeuix/themes';
import Aura from '@primeng/themes/aura';

/**
 * Aura preset with its primary color scale replaced by shades of the
 * brand accent (#d8151e), derived by mixing toward white/black, so
 * PrimeNG components (buttons, inputs, focus rings) match the rest of
 * the site instead of Aura's default blue.
 */
export const BRAND_PRESET = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fdf1f2',
      100: '#fadee0',
      200: '#f3b9bc',
      300: '#ec8f93',
      400: '#e3575d',
      500: '#d8151e',
      600: '#be121a',
      700: '#a21016',
      800: '#820d12',
      900: '#680a0e',
      950: '#4c070a',
    },
  },
});
