/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledIcon } from '../../styled';

const Icon = styled(StyledIcon)``;

Icon.propTypes = {
  /** Rotates icon 180 degrees */
  rotated: PropTypes.bool
};

/** @component */
export default Icon;
