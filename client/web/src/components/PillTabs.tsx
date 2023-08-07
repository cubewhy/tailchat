import { Tabs, TabsProps } from 'antd';
import React from 'react';

import './PillTabs.less';

/**
 * @example
 * <PillTabs items={[...]} />
 */
export const PillTabs: React.FC<TabsProps> = React.memo((props) => {
  return (
    <Tabs {...props} className="pill-tabs" type="card" animated={false}>
      {props.children}
    </Tabs>
  );
});
PillTabs.displayName = 'PillTabs';

/**
 * @deprecated
 */
export const PillTabPane = Tabs.TabPane;
