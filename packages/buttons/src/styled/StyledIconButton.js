/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { math } from 'polished';
import { defaultTheme, retrieveTheme } from '@zendeskgarden/react-theming';
import StyledButton from './StyledButton';
import StyledIcon from './StyledIcon';
import * as styles from './styles';

const COMPONENT_ID = 'buttons.icon_button';

const iconStyles = props => {
  const size =
    props.size === 'large'
      ? math(`${props.theme.space.base * 6} * 1px`)
      : math(`${props.theme.space.base * 4} * 1px`);

  return css`
    width: ${size};
    height: ${size};
  `;
};

const StyledIconButton = styled(StyledButton).attrs(() => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
}))`
  ${props => styles.icon(props)};

  ${StyledIcon} {
    ${props => iconStyles(props)}
  }

  ${props => retrieveTheme('buttons.icon_button', props)};
`;

StyledIconButton.defaultProps = {
  theme: defaultTheme
};

export default StyledIconButton;
