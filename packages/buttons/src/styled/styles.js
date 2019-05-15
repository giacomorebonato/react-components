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
  const hue = props.danger ? props.theme.colors.red : props.hue;
  const baseColor = getColor({ hue, shade: props.shade, theme: props.theme });
  const hoverColor = getColor({ hue, shade: props.shade + 100, theme: props.theme });
  const activeColor = getColor({ hue, shade: props.shade + 200, theme: props.theme });
  const boxShadow = `
    ${props.focusInset ? 'inset' : ''}
    ${props.theme.shadows.md(rgba(baseColor, 0.35))}`;

  if (props.primary) {
    retVal = css`
      background-color: ${baseColor};
      color: ${props.theme.colors.white};

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

const size = props => {
  let fontSize;
  let lineHeight;
  let minWidth;
  const padding = props.theme.space.base * 7;

  if (props.size === 'small') {
    fontSize = props.theme.fontSizes.sm;
    lineHeight = props.theme.space.base * 8;
    minWidth = props.theme.space.base * 25;
  } else if (props.size === 'large') {
    fontSize = props.theme.fontSizes.md;
    lineHeight = props.theme.space.base * 12;
    minWidth = props.theme.space.base * 35;
  } else {
    fontSize = props.theme.fontSizes.md;
    lineHeight = props.theme.space.base * 10;
    minWidth = props.theme.space.base * 30;
  }

  return css`
    padding: 0 ${em(math(`${padding} - ${props.theme.borderWidths.sm}`), fontSize)};
    min-width: ${!props.stretched && `${minWidth}px`};
    line-height: ${math(`${lineHeight} - (${props.theme.borderWidths.sm} * 2)`)};
    font-size: ${fontSize};
  `;
};

export { color };
export { size };
