import { useCustomTabBar } from '@/models/customTabBar';
import { Image, Text, View } from '@tarojs/components';
import classNames from 'classnames';
import type { FC } from 'react';
import './index.scss';

const CustomTabBar: FC = () => {
  const tabBar = useCustomTabBar((state) => state.tabBar);
  const selectedTabBarAndSwitchTab = useCustomTabBar((state) => state.selectedTabBarAndSwitchTab);

  return (
    <View
      className={classNames({
        'global-custom-tab-bar': true,
        none: tabBar.length === 0,
      })}
    >
      <View className="tab-bar-border" />
      {tabBar.map(({ text, color, iconPath, pagePath, selected }) => {
        return (
          <View
            key={pagePath}
            className="tab-bar-item"
            onClick={() => {
              if (selected) return;
              selectedTabBarAndSwitchTab(pagePath);
            }}
          >
            <Image className="icon" src={iconPath} />
            <Text className="text" style={{ color }}>
              {text}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
