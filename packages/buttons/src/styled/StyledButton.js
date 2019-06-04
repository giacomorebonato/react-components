/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { defaultTheme, retrieveTheme, getColor } from '@zendeskgarden/react-theming';
import ButtonGroupView from '../views/button-group/ButtonGroupView';
import * as styles from './styles';

const COMPONENT_ID = 'buttons.button';

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
  border: ${props => `${props.theme.borders.sm} transparent`};
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

  ${props => styles.size(props)};

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

  /* Color (default, primary, basic, & danger) styling */
  ${props => styles.color(props)};

  &:disabled {
    border-color: transparent;
    box-shadow: none;
    background-color: ${props =>
      getColor({ hue: props.theme.colors.disabledHue, shade: 200, theme: props.theme })};
    cursor: default;
    color: ${props =>
      getColor({ hue: props.theme.colors.disabledHue, shade: 400, theme: props.theme })};
  }

  ${ButtonGroupView} & {
    ${props => styles.group(props)};
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: defaultTheme
};

export default StyledButton;
