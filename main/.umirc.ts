import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { exact: true, path: '/app1', microApp: 'app1' },
    { exact: true, path: '/app2', microApp: 'app2' },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {},
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:8002', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {},
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
  fastRefresh: {},
});
