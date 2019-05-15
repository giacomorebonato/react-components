/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  zdFontFamilySystem,
  zdFontFamilyMonospace,
  zdFontSizeSm,
  zdFontSizeMd,
  zdFontSizeLg,
  zdFontSizeXl,
  zdFontSizeXxl,
  zdFontSizeXxxl,
  zdFontWeightThin,
  zdFontWeightExtralight,
  zdFontWeightLight,
  zdFontWeightRegular,
  zdFontWeightSemibold,
  zdFontWeightBold,
  zdFontWeightExtrabold,
  zdFontWeightBlack,
  zdLineHeightSm,
  zdLineHeightMd,
  zdLineHeightLg,
  zdLineHeightXl,
  zdLineHeightXxl,
  zdLineHeightXxxl,
  zdSpacingXxs,
  zdSpacingXs,
  zdSpacingSm,
  zdSpacing,
  zdSpacingLg,
  zdSpacingXl,
  zdSpacingXxl
} from '@zendeskgarden/css-variables';
import { stripUnit } from 'polished';
import colors from './colors';

const base = 4;

const borderStyles = {
  solid: 'solid'
};

const borderWidths = [0, 1, 3];

borderWidths.sm = `${borderWidths[1]}px`;
borderWidths.md = `${borderWidths[2]}px`;

const borders = [
  `${borderWidths[0]} ${borderStyles.solid}`,
  `${borderWidths.sm} ${borderStyles.solid}`,
  `${borderWidths.md} ${borderStyles.solid}`
];

borders.sm = borders[1];
borders.md = borders[2];

const fontSizes = [
  stripUnit(zdFontSizeSm),
  stripUnit(zdFontSizeMd),
  stripUnit(zdFontSizeLg),
  stripUnit(zdFontSizeXl),
  stripUnit(zdFontSizeXxl),
  stripUnit(zdFontSizeXxxl)
];

fontSizes.sm = `${fontSizes[0]}px`;
fontSizes.md = `${fontSizes[1]}px`;
fontSizes.lg = `${fontSizes[2]}px`;
fontSizes.xl = `${fontSizes[3]}px`;
fontSizes.xxl = `${fontSizes[4]}px`;
fontSizes.xxxl = `${fontSizes[5]}px`;

const fontWeights = [
  parseInt(zdFontWeightThin, 10),
  parseInt(zdFontWeightExtralight, 10),
  parseInt(zdFontWeightLight, 10),
  parseInt(zdFontWeightRegular, 10),
  parseInt(zdFontWeightSemibold, 10),
  parseInt(zdFontWeightBold, 10),
  parseInt(zdFontWeightExtrabold, 10),
  parseInt(zdFontWeightBlack, 10)
];

fontWeights.thin = fontWeights[0];
fontWeights.extralight = fontWeights[1];
fontWeights.light = fontWeights[2];
fontWeights.regular = fontWeights[3];
fontWeights.semibold = fontWeights[4];
fontWeights.bold = fontWeights[5];
fontWeights.extrabold = fontWeights[6];
fontWeights.black = fontWeights[7];

const lineHeights = [
  stripUnit(zdLineHeightSm),
  stripUnit(zdLineHeightMd),
  stripUnit(zdLineHeightLg),
  stripUnit(zdLineHeightXl),
  stripUnit(zdLineHeightXxl),
  stripUnit(zdLineHeightXxxl)
];

lineHeights.sm = `${lineHeights[0]}px`;
lineHeights.md = `${lineHeights[1]}px`;
lineHeights.lg = `${lineHeights[2]}px`;
lineHeights.xl = `${lineHeights[3]}px`;
lineHeights.xxl = `${lineHeights[4]}px`;
lineHeights.xxxl = `${lineHeights[5]}px`;

const modes = {
  light: {
    background: colors.white,
    foreground: colors.grey[800],
    hue: 'blue',
    shade: 600
  }
};

const radii = [0, base / 2, base];

radii.sm = `${radii[1]}px`;
radii.md = `${radii[2]}px`;

const shadowWidths = [0, 2, 3];

shadowWidths.sm = `${shadowWidths[1]}px`;
shadowWidths.md = `${shadowWidths[2]}px`;

const shadows = [
  color => `0 0 0 ${shadowWidths[0]} ${color}`,
  color => `0 0 0 ${shadowWidths.sm} ${color}`,
  color => `0 0 0 ${shadowWidths.md} ${color}`
];

shadows.sm = shadows[1];
shadows.md = shadows[2];

const space = [
  0,
  stripUnit(zdSpacingXxs),
  stripUnit(zdSpacingXs),
  stripUnit(zdSpacingSm),
  stripUnit(zdSpacing),
  stripUnit(zdSpacingLg),
  stripUnit(zdSpacingXl),
  stripUnit(zdSpacingXxl)
];

space.base = base;
space.xxs = `${space[1]}px`;
space.xs = `${space[2]}px`;
space.sm = `${space[3]}px`;
space.md = `${space[4]}px`;
space.lg = `${space[5]}px`;
space.xl = `${space[6]}px`;
space.xxl = `${space[7]}px`;

export default {
  borders,
  borderStyles,
  borderWidths,
  colors,
  fonts: {
    sans: zdFontFamilySystem,
    mono: zdFontFamilyMonospace
  },
  fontSizes,
  fontWeights,
  lineHeights,
  mode: 'light',
  modes,
  radii,
  shadowWidths,
  shadows,
  space
};
