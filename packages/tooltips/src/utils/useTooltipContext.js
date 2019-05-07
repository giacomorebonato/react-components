/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useContext } from 'react';
import { TooltipContext } from '../TooltipProvider';

/**
 * Retrieve TooltipProvider component context
 */
const useTooltipContext = () => {
  const tooltipContext = useContext(TooltipContext);

  if (!tooltipContext) {
    throw new Error('This component must be rendered within a `TooltipProvider` component.');
  }

  return tooltipContext;
};

export default useTooltipContext;
