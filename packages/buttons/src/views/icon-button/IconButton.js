/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { math } from 'polished';
import { defaultTheme, retrieveTheme } from '@zendeskgarden/react-theming';
import * as styles from '../../styled/styles';
import Icon from './Icon';

const COMPONENT_ID = 'buttons.icon_button';

import Button from '../Button';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const IconButton = styled(Button).attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  ${props => styles.icon(props)};

  ${Icon} {
    /* stylelint-disable declaration-colon-newline-after */
    width: ${props =>
      props.size === SIZE.LARGE
        ? math(`${props.theme.base * 6} * 1px`)
        : math(`${props.theme.base * 4} * 1px`)};
    height: ${props =>
      props.size === SIZE.LARGE
        ? math(`${props.theme.base * 6} * 1px`)
        : math(`${props.theme.base * 4} * 1px`)};
    /* stylelint-enable declaration-colon-newline-after */
  }

  ${props => retrieveTheme('buttons.icon_button', props)};
`;

IconButton.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  /** Callback for reference of the native button element */
  buttonRef: PropTypes.func
};

IconButton.defaultProps = {
  pill: true,
  basic: true,
  size: SIZE.MEDIUM,
  theme: defaultTheme
};

/** @component */
export default IconButton;
