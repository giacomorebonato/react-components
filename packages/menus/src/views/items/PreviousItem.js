/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';

import Item from './Item';

const COMPONENT_ID = 'menus.previous_item';

/**
 * Accepts all `<li>` props
 */
const PreviousItem = styled(Item).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(props.className, MenuStyles['c-menu__item--previous'])
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

PreviousItem.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  disabled: PropTypes.bool
};

PreviousItem.hasType = () => PreviousItem;

/** @component */
export default PreviousItem;
