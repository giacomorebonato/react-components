/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { defaultTheme, retrieveTheme } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'buttons.button_group_view';

/**
 * Accepts all `<div>` props
 */
const ButtonGroupView = styled.div.attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  position: relative;
  z-index: 0;
  direction: ${props => props.theme.rtl && 'rtl'};
  white-space: nowrap;

  :focus {
    outline: none;
  }

  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

ButtonGroupView.defaultProps = {
  theme: defaultTheme
};

/** @component */
export default ButtonGroupView;
