/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import NewWindowIcon from '@zendeskgarden/svg-icons/src/12/new-window-stroke.svg';
import { defaultTheme, retrieveTheme, isRtl } from '@zendeskgarden/react-theming';
import StyledButton from './StyledButton';

const COMPONENT_ID = 'buttons.anchor';

export const StyledAnchor = styled(StyledButton).attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'a',
  link: true,
  type: undefined
}))`
  direction: ${props => isRtl(props) && 'rtl'};
  word-wrap: ${props => props.external && 'break-word'};
  white-space: ${props => props.external && 'pre'};

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

StyledAnchor.defaultProps = {
  theme: defaultTheme
};

export const StyledExternalIcon = styled(NewWindowIcon)`
  transform: ${props => isRtl(props) && 'scaleX(-1)'};
  margin-bottom: -0.085em;
  padding-left: 0.25em;
  width: 0.85em;
  height: 0.85em;
`;

StyledExternalIcon.defaultProps = {
  theme: defaultTheme
};
