import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#3399FF',
  colorSecondary: '#122846',

  // UI
  appBg: '#F0F4FA',
  appContentBg: 'white',
  appBorderColor: '#B6BBC6',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Source Sans Pro", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2B2B2B',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#68788D',
  barSelectedColor: '#3399FF',

  // Form colors
  inputBg: 'white',
  inputBorder: '#68788D',
  inputTextColor: '#2B2B2B',
  inputBorderRadius: 4,

  brandTitle: 'Provider Trust Storybook',
  brandUrl: 'https://providertrust.com',
  brandImage: './.storybook/assets/logo.svg',
});
