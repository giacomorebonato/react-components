/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { defaultTheme, retrieveTheme } from '@zendeskgarden/react-theming';
import StyledButtonGroup from './StyledButtonGroup';
import * as styles from './styles';

const COMPONENT_ID = 'buttons.button';

const getBorderRadius = props => {
  if (props.link) {
    return 0;
  } else if (props.pill) {
    return '100px';
  }

  return props.theme.radii.md;
};

/**
 * Accepts all `<button>` props
 */
const StyledButton = styled.button.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, { 'focus-visible': props.focused }),
  type: 'button'
}))`
  display: ${props => (props.link ? 'inline' : 'inline-block')};
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out;
  margin: 0;
  border: ${props => (props.link ? 'none' : `${props.theme.borders.sm} transparent`)};
  border-radius: ${props => getBorderRadius(props)};
  cursor: pointer;
  width: ${props => (props.stretched ? '100%' : '')};
  overflow: hidden;
  vertical-align: ${props => !props.link && 'middle'};
  text-align: center;
  text-decoration: none; /* <a> element reset */
  text-overflow: ellipsis;
  white-space: ${props => !props.link && 'nowrap'};
  font-family: inherit; /* <button> & <input> override */
  font-weight: ${props => (props.link ? 'inherit' : props.theme.fontWeights.regular)};
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
    text-decoration: ${props => (props.link ? 'underline' : 'none')}; /* <a> element reset */
  }

  &:focus {
    outline: none;
  }

  &.focus-visible {
    text-decoration: ${props => (props.link ? 'underline' : 'none')}; /* <a> element reset */
  }

  &:active {
    /* prettier-ignore */
    transition:
      border-color 0.1s ease-in-out,
      background-color 0.1s ease-in-out,
      color 0.1s ease-in-out;
    text-decoration: ${props => (props.link ? 'underline' : 'none')}; /* <a> element reset */
  }

  /* Color (default, primary, basic, & danger) styling */
  ${props => styles.color(props)};

  &:disabled {
    cursor: default;
    text-decoration: ${props => props.link && 'none'};
  }

  /* stylelint-disable */
  ${StyledButtonGroup} & {
    ${props => styles.group(props)};
  }
  /* stylelint-enable */

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledButton.defaultProps = {
  theme: defaultTheme
};

export default StyledButton;
