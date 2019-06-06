/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { defaultTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.icon';

const Icon = styled(({ children, ...props }) =>
  React.cloneElement(Children.only(children), props)
).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  transform: ${props => props.rotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
`;

Icon.propTypes = {
  /** Rotates icon 180 degrees */
  rotated: PropTypes.bool,
  theme: defaultTheme
};

/** @component */
export default Icon;
