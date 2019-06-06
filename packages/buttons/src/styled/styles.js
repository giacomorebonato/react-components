/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css } from 'styled-components';
import { em, math, rgba } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';

const getLineHeight = props => {
  if (props.size === 'small') {
    return props.theme.base * 8;
  } else if (props.size === 'large') {
    return props.theme.base * 12;
  }

  return props.theme.base * 10;
};

const color = props => {
  let retVal;
  const hue = props.danger ? props.theme.colors.dangerHue : props.theme.colors.primaryHue;
  const shade = props.theme.colors.primaryShade;
  const baseColor = getColor({ hue, shade, theme: props.theme });
  const hoverColor = getColor({ hue, shade: shade + 100, theme: props.theme });
  const activeColor = getColor({ hue, shade: shade + 200, theme: props.theme });
  const boxShadowColor = props.focusInset && props.primary ? props.theme.palette.white : baseColor;
  const boxShadow = `
    ${props.focusInset ? 'inset' : ''}
    ${props.theme.shadows.md(rgba(boxShadowColor, 0.35))}`;

  if (props.primary) {
    retVal = css`
      background-color: ${baseColor};
      color: ${props.theme.palette.white};

      &:hover {
        background-color: ${hoverColor};
      }

      &.focus-visible {
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

      &.focus-visible {
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
  const primary = props.primary;
  const rtl = props.theme.rtl;
  const lightBorderColor = getColor({ hue: 'grey', shade: 100, theme: props.theme });
  const lineHeight = getLineHeight(props);

  return css`
    position: relative;
    /* stylelint-disable-next-line property-no-unknown */
    margin-${rtl ? 'right' : 'left'}: ${math(`${props.theme.borderWidths.sm} * -1`)};
    border-top-width: ${primary && 0};
    border-bottom-width: ${primary && 0};
    border-right-color: ${primary && lightBorderColor};
    border-left-color: ${primary && lightBorderColor};
    line-height: ${primary && math(`${lineHeight} * 1px`)};

    /* stylelint-disable property-no-unknown, property-case */
    &:first-of-type {
      margin-${rtl ? 'right' : 'left'}: 0;
      border-top-${rtl ? 'left' : 'right'}-radius: 0;
      border-bottom-${rtl ? 'left' : 'right'}-radius: 0;
      border-${rtl ? 'right' : 'left'}-width: ${primary && 0};
    }

    &:last-of-type {
      border-top-${rtl ? 'right' : 'left'}-radius: 0;
      border-bottom-${rtl ? 'right' : 'left'}-radius: 0;
      border-${rtl ? 'left' : 'right'}-width: ${primary && 0};
    }
    /* stylelint-enable property-no-unknown, property-case */

    &:hover,
    &:active {
      z-index: 1;
    }

    &:disabled {
      z-index: -1;
      border-top-width: 0;
      border-bottom-width: 0;
      border-right-color: ${lightBorderColor};
      border-left-color: ${lightBorderColor};
      line-height: ${math(`${lineHeight} * 1px`)};
    }

    &:not(:first-of-type):not(:last-of-type) {
      border-radius: 0;
    }
  `;
};

const icon = props => {
  const lineHeight = getLineHeight(props);
  const size = math(`${lineHeight} * 1px`);

  return css`
    border: ${props.basic && 'none'};
    padding: 0;
    width: ${size};
    min-width: 0;
    height: ${size};
  `;
};

const size = props => {
  let fontSize;
  let minWidth;
  const lineHeight = getLineHeight(props);
  const padding = props.theme.base * 7;

  if (props.size === 'small') {
    fontSize = props.theme.fontSizes.sm;
    minWidth = props.theme.base * 25;
  } else if (props.size === 'large') {
    fontSize = props.theme.fontSizes.md;
    minWidth = props.theme.base * 35;
  } else {
    fontSize = props.theme.fontSizes.md;
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
export { icon };
export { size };
