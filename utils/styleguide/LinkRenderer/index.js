/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from '../../../packages/buttons/src';

const LinkRenderer = ({ children }) => <Anchor>{children}</Anchor>;

LinkRenderer.propTypes = {
  children: PropTypes.node
};

export default LinkRenderer;
