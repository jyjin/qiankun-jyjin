// 从接口中获取子应用配置，export 出的 qiankun 变量是一个 promise
export const qiankun = new Promise(res => res()).then(() => {
  return ({

    // 注册子应用信息
    apps: [{
      name: 'sub1',
      entry: '//localhost:4001',
      base: '/sub1',
      history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
      props: {
        onClick: event => console.log(event),
      },
    }],
    jsSandbox: true, // 是否启用 js 沙箱，默认为 false
    prefetch: 'all', // 是否启用 prefetch 特性，默认为 true
    lifeCycles: {
      // see https://github.com/umijs/qiankun#registermicroapps
      afterMount: props => {
        console.log(props);
      },
    },
    // ...even more options qiankun start() supported, see https://github.com/umijs/qiankun#start
  })
})
