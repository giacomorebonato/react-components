/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { default as defaultTheme } from '../theme';

const ThemeProvider = props => {
  if (props.theme.colors) {
    props.theme.colors = { ...defaultTheme.colors, ...props.theme.colors };
  }

  // TODO [jtz] need a smart theming merge – retain the default; add and replace with custom.
  const theme = { ...defaultTheme, ...props.theme, rtl: props.rtl, document: props.document };

  return <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>;
};

ThemeProvider.defaultProps = {
  theme: defaultTheme
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  rtl: PropTypes.bool,
  theme: PropTypes.object,
  document: PropTypes.object
};

/** @component */
export default ThemeProvider;
