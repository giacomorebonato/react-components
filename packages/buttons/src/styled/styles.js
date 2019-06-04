/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css } from 'styled-components';
import { em, math, rgba } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';

const color = props => {
  let retVal;
  const hue = props.danger ? props.theme.colors.dangerHue : props.theme.colors.primaryHue;
  const shade = props.theme.colors.primaryShade;
  const baseColor = getColor({ hue, shade, theme: props.theme });
  const hoverColor = getColor({ hue, shade: shade + 100, theme: props.theme });
  const activeColor = getColor({ hue, shade: shade + 200, theme: props.theme });
  const boxShadow = `
    ${props.focusInset ? 'inset' : ''}
    ${props.theme.shadows.md(rgba(baseColor, 0.35))}`;

  if (props.primary) {
    retVal = css`
      background-color: ${baseColor};
      color: ${props.theme.palette.white};

      &:hover {
        background-color: ${hoverColor};
      }

      &:focus {
        box-shadow: ${props.focused && boxShadow};
      }

      &:active {
        background-color: ${activeColor};
      }
    `;
  } else {
    retVal = css`
      border-color: ${!props.basic && baseColor};
      background-color: transparent;
      color: ${baseColor};

      &:hover {
        border-color: ${!props.basic && hoverColor};
        background-color: ${rgba(baseColor, 0.08)};
        color: ${hoverColor};
      }

      &:focus {
        box-shadow: ${props.focused && boxShadow};
      }

      &:active {
        border-color: ${!props.basic && activeColor};
        background-color: ${rgba(baseColor, 0.2)};
        color: ${activeColor};
      }
    `;
  }

  return retVal;
};

const group = props => {
  const rtl = props.theme.rtl;

  return css`
    position: relative;
    margin-${rtl ? 'right' : 'left'}: ${math(`${props.theme.borderWidths.sm} * -1`)};

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }

    &:first-of-type {
      margin-left: 0;
      border-top-${rtl ? 'left' : 'right'}-radius: 0;
      border-bottom-${rtl ? 'left' : 'right'}-radius: 0;
    }

    &:last-of-type {
      border-top-${rtl ? 'right' : 'left'}-radius: 0;
      border-bottom-${rtl ? 'right' : 'left'}-radius: 0;
    }

    &:hover,
    &:active {
      z-index: 1;
    }
  `;
};

const size = props => {
  let fontSize;
  let lineHeight;
  let minWidth;
  const padding = props.theme.base * 7;

  if (props.size === 'small') {
    fontSize = props.theme.fontSizes.sm;
    lineHeight = props.theme.base * 8;
    minWidth = props.theme.base * 25;
  } else if (props.size === 'large') {
    fontSize = props.theme.fontSizes.md;
    lineHeight = props.theme.base * 12;
    minWidth = props.theme.base * 35;
  } else {
    fontSize = props.theme.fontSizes.md;
    lineHeight = props.theme.base * 10;
    minWidth = props.theme.base * 30;
  }

  return css`
    padding: 0 ${em(math(`${padding} - ${props.theme.borderWidths.sm}`), fontSize)};
    min-width: ${!props.stretched && `${minWidth}px`};
    line-height: ${math(`${lineHeight} - (${props.theme.borderWidths.sm} * 2)`)};
    font-size: ${fontSize};
  `;
};

export { color };
export { group };
export { size };
