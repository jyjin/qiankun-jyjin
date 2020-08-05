import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: '顶层框架app',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: 'index' },
        { path: '/home', component: 'container/home' },
        { path: '/list', component: 'container/list' },
        { path: '/sub1', exact: true, component: 'container/sub1' },
      ],
    },
  ],
  qiankun: {
    master: {
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
      defer: true,
    }
  },

});
