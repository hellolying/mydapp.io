export default [
  {
    path: '/mydapp',
    component: () => import('layouts/default'),
    children: [
      {path: '', component: () => import('pages/index-eth')},
      {path: 'eth', component: () => import('pages/index-eth')},
      {path: 'eos', component: () => import('pages/index-eos')},
      {path: 'bch', component: () => import('pages/index-bch')}
    ]
  },
  // 以太主页
  {
    path: '/mydapp/:myDappId',
    name: 'mydapp',
    component: () => import('layouts/detail'),
    children: [
      {path: 'detail', component: () => import('pages/detail')}
    ]
  },
  // 中文以太主页
  {
    path: '/index/eth/zh',
    component: () => import('layouts/default'),
    children: [
      {path: '', name: 'eth-zh', component: () => import('pages/index-eth-zh')}
    ]
  },

  // 日文以太主页
  {
    path: '/index/eth/ja',
    component: () => import('layouts/default'),
    children: [
      {path: '', name: 'eth-ja', component: () => import('pages/index-eth-ja')}
    ]
  },

  // 英文以太主页
  {
    path: '/index/eth/en',
    component: () => import('layouts/default'),
    children: [
      {path: '', name: 'eth-en', component: () => import('pages/index-eth-en')}
    ]
  },

  // { // Always leave this as last one
  //   path: '*',
  //   redirect: '/index/eth/en'
  // }
  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
