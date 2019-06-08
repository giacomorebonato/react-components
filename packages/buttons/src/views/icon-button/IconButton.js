/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardFocusContainer } from '@zendeskgarden/react-selection';
import { StyledIconButton } from '../../styled';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

/**
 * Accepts all `<button>` props
 */
const IconButton = React.forwardRef(({ focused, ...buttonProps }, ref) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledIconButton
        {...getFocusProps({
          ref,
          ...buttonProps,
          focused: focused || keyboardFocused
        })}
      />
    )}
  </KeyboardFocusContainer>
));

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
  focused: PropTypes.bool
};

IconButton.defaultProps = {
  pill: true,
  basic: true,
  size: SIZE.MEDIUM
};

/** @component */
export default IconButton;
