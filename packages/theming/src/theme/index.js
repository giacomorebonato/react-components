/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import colors from './colors';

const base = 4;

const borderStyles = {
  none: 'none',
  solid: 'solid'
};

const borderWidths = {
  none: 0,
  sm: '1px',
  md: '3px'
};

const borders = {
  none: `${borderWidths.none} ${borderStyles.none}`,
  sm: `${borderWidths.sm} ${borderStyles.solid}`,
  md: `${borderWidths.md} ${borderStyles.solid}`
};

const fonts = {
  mono: [
    'SFMono-Regular' /* macOS */,
    'Consolas' /* Windows */,
    '"Liberation Mono"' /* Ubuntu */,
    'Menlo',
    'Courier',
    'monospace'
  ].join(','),
  system: [
    'system-ui' /* drafts.csswg.org/css-fonts-4/#system-ui */,
    '-apple-system' /* macOS Safari & FF (San Francisco) */,
    'BlinkMacSystemFont' /* macOS Chrome (San Francisco) */,
    '"Segoe UI"' /* Windows */,
    'Roboto' /* Android & ChromeOS */,
    'Oxygen-Sans' /* KDE */,
    'Ubuntu' /* Ubuntu */,
    'Cantarell' /* GNOME */,
    '"Helvetica Neue"',
    'Arial',
    'sans-serif'
  ].join(',')
};

const fontSizes = {
  none: 0,
  sm: '12px',
  md: '14px',
  lg: '18px',
  xl: '22px',
  xxl: '26px',
  xxxl: '36px'
};

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  semibold: 500,
  bold: 600,
  extrabold: 700,
  black: 800
};

const lineHeights = {
  none: 0,
  sm: `${base * 4}px`,
  md: `${base * 5}px`,
  lg: `${base * 6}px`,
  xl: `${base * 7}px`,
  xxl: `${base * 8}px`,
  xxxl: `${base * 11}px`
};

const modes = {
  default: {
    backgroundColor: colors.white,
    foregroundColor: colors.grey[800],
    primaryHue: 'blue',
    primaryShade: 600
  }
};

const radii = {
  none: 0,
  sm: `${base / 2}px`,
  md: `${base}px`
};

const shadowWidths = {
  sm: '2px',
  md: '3px'
};

const shadows = {
  sm: color => `0 0 0 ${shadowWidths.sm} ${color}`,
  md: color => `0 0 0 ${shadowWidths.md} ${color}`
};

const space = {
  none: 0,
  xxs: `${base}px`,
  xs: `${base * 2}px`,
  sm: `${base * 3}px`,
  md: `${base * 5}px`,
  lg: `${base * 8}px`,
  xl: `${base * 10}px`,
  xxl: `${base * 12}px`
};

export default {
  base,
  borders,
  borderStyles,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  mode: 'default',
  modes,
  radii,
  shadowWidths,
  shadows,
  space
};
