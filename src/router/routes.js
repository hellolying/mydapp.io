export default [
  // 以太主页
  {
    path: '/mydapp',
    component: () => import('layouts/main-frame'),
    children: [
      {path: '', meta: { isMainFrame: true }, component: () => import('pages/index-eth')},
      {path: 'eth', meta: { isMainFrame: true }, component: () => import('pages/index-eth')},
      {path: 'eos', meta: { isMainFrame: true }, component: () => import('pages/index-eos')},
      {path: 'bch', meta: { isMainFrame: true }, component: () => import('pages/index-bch')}
    ]
  },
  // 详情页
  {
    path: '/mydapp/detail/',
    name: 'mydapp',
    component: () => import('layouts/main-frame'),
    children: [
      {path: 'eth/:myDappId', meta: { isMainFrame: false }, component: () => import('pages/detail')},
      {path: 'eos/:myDappId', meta: { isMainFrame: false }, component: () => import('pages/eosDetail')},
      {path: 'bch/:myDappId', meta: { isMainFrame: false }, component: () => import('pages/eosDetail')}
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
