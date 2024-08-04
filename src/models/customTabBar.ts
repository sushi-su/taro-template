import example from '@/assets/example.png';
import exampleSelected from '@/assets/example_selected.png';
import home from '@/assets/home.png';
import homeSelected from '@/assets/home_selected.png';
import { switchTab } from '@tarojs/taro';
import { create } from 'zustand';

// TabBar 页面路径
export enum TabBarPagePath {
  /**
   * 首页
   */
  INDEX = '/pages/index/index',
  /**
   * 示例
   */
  EXAMPLE = '/pages/example/index',
}

// TabBar 文字颜色
export enum TabBarTextColor {
  /**
   * 未选中
   */
  UNSELECTED = '#999',
  /**
   * 选中
   */
  SELECTED = '#fa2c19',
}

export interface TabBar {
  pagePath: TabBarPagePath;
  iconPath: string;
  text: string;
  color: TabBarTextColor;
  selected: boolean;
}

export const iconPathMap: Record<
  TabBarPagePath,
  {
    selectedIconPath: string;
    iconPath: string;
  }
> = {
  [TabBarPagePath.INDEX]: {
    selectedIconPath: homeSelected,
    iconPath: home,
  },
  [TabBarPagePath.EXAMPLE]: {
    selectedIconPath: exampleSelected,
    iconPath: example,
  },
};

const handleUpdateTabBar = (to: TabBarPagePath, tabBar: TabBar[]) => {
  return tabBar.map(({ pagePath, text }) => {
    const selected = pagePath === to;
    const iconPath = selected ? iconPathMap[pagePath].selectedIconPath : iconPathMap[pagePath].iconPath;
    const color = selected ? TabBarTextColor.SELECTED : TabBarTextColor.UNSELECTED;

    return {
      pagePath,
      text,
      iconPath,
      color,
      selected,
    };
  });
};

export interface CustomTabBarState {
  tabBar: TabBar[];
}

export interface CustomTabBarAction {
  updateTabBar: (tabBar: TabBar[]) => void;
  selectedTabBar: (to: TabBarPagePath) => void;
  selectedTabBarAndSwitchTab: (to: TabBarPagePath) => void;
}

const initialState: CustomTabBarState = {
  tabBar: [
    {
      pagePath: TabBarPagePath.INDEX,
      iconPath: iconPathMap[TabBarPagePath.INDEX].selectedIconPath,
      text: '首页',
      color: TabBarTextColor.UNSELECTED,
      selected: true,
    },
    {
      pagePath: TabBarPagePath.EXAMPLE,
      iconPath: iconPathMap[TabBarPagePath.EXAMPLE].iconPath,
      text: '示例',
      color: TabBarTextColor.UNSELECTED,
      selected: false,
    },
  ],
};

export const useCustomTabBar = create<CustomTabBarState & CustomTabBarAction>((set) => ({
  ...initialState,
  updateTabBar: (tabBar) => {
    set({ tabBar });
  },
  selectedTabBar: (to) => {
    set(({ tabBar }) => ({
      tabBar: handleUpdateTabBar(to, tabBar),
    }));
  },
  selectedTabBarAndSwitchTab: (to) => {
    set(({ tabBar }) => ({
      tabBar: handleUpdateTabBar(to, tabBar),
    }));

    switchTab({
      url: to,
    });
  },
}));
