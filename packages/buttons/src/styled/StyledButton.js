/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { defaultTheme, retrieveTheme } from '@zendeskgarden/react-theming';
import { em, math, rgba } from 'polished';

const COMPONENT_ID = 'buttons.button';

const boxShadow = (props, hue) =>
  `${props.focusInset ? 'inset' : ''}
   ${props.theme.shadows.md(rgba(hue[600], 0.35))}`;

const basicButtonStyles = css`
  border-color: transparent;
  background-color: transparent;

  &:hover {
    border-color: transparent;
  }
`;

const buttonSizeStyles = props => {
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

const buttonStyles = hue => css`
  border-color: ${hue[600]};
  background-color: transparent;
  color: ${hue[600]};

  &:hover {
    border-color: ${hue[700]};
    background-color: ${rgba(hue[600], 0.08)};
    color: ${hue[700]};
  }

  &:focus {
    box-shadow: ${props => props.focused && boxShadow(props, hue)};
  }

  &:active {
    border-color: ${hue[800]};
    background-color: ${rgba(hue[600], 0.2)};
    color: ${hue[800]};
  }
`;

const primaryButtonStyles = hue => css`
  border-color: transparent;
  background-color: ${hue[600]};
  color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${hue[700]};
  }

  &:focus {
    box-shadow: ${props => props.focused && boxShadow(props, hue)};
  }

  &:active {
    background-color: ${hue[800]};
  }
`;

/**
 * Accepts all `<button>` props
 */
const StyledButton = styled.button.attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  type: 'button'
}))`
  display: inline-block;
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  margin: 0;
  border: ${props => props.theme.borders.sm};
  border-radius: ${props => (props.pill ? '100px' : props.theme.radii.md)};
  cursor: pointer;
  width: ${props => (props.stretched ? '100%' : '')};
  overflow: hidden;
  vertical-align: middle;
  text-align: center;
  text-decoration: none; /* <a> element reset */
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: inherit; /* <button> & <input> override */
  font-weight: ${props => props.theme.fontWeights.regular};
  -webkit-font-smoothing: subpixel-antialiased;
  box-sizing: border-box;
  user-select: none;
  -webkit-touch-callout: none;

  ${props => buttonSizeStyles(props)};

  &::-moz-focus-inner {
    /* FF <input type="submit"> fix */
    border: 0;
    padding: 0;
  }

  &:hover {
    text-decoration: none; /* <a> element reset */
  }

  &:focus {
    outline: none;
  }

  /* stylelint-disable */

  /* Default and danger styling */
  ${props =>
    !props.primary &&
    (props.danger
      ? buttonStyles(props.theme.colors.red)
      : buttonStyles(props.theme.colors[props.hue]))};

  /* Basic styling */
  ${props => props.basic && basicButtonStyles};

  /* Primary styling */
  ${props =>
    props.primary &&
    (props.danger
      ? primaryButtonStyles(props.theme.colors.red)
      : primaryButtonStyles(props.theme.colors[props.hue]))};

  /* stylelint-enable */

  /* Disabled styling */
  &:disabled {
    border-color: transparent;
    box-shadow: none;
    background-color: ${props => props.theme.colors.grey[200]};
    cursor: default;
    color: ${props => props.theme.colors.grey[400]};
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: defaultTheme,
  hue: defaultTheme.mode.light.hue
};

export default StyledButton;
