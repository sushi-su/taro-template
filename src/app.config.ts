export default defineAppConfig({
  pages: ['pages/index/index', 'pages/example/index'],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'ReactTemplate',
    navigationBarTextStyle: 'black',
  },
  usingComponents: {},
  lazyCodeLoading: 'requiredComponents',
  tabBar: {
    custom: true,
    color: '#999',
    selectedColor: '#fa2c19',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/example/index',
        text: '示例',
      },
    ],
  },
});
