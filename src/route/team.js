const team  =[
  {
    path: 'team',
    component: require('../pages/team/Index').default,
    name: 'team',
    redirect: { name: 'teamContain' },
    meta:{
      name:"team"
    },
    children:[
    {
      path: 'contain',
      component: require('../pages/team/index/Contain').default,
      name: 'teamContain',
      meta:{
        name:"teamContain"
      }
    },
    {
      path: 'created',
      component: require('../pages/team/index/Created').default,
      name: 'teamCreated',
      meta:{
        name:"teamCreated"
      }
    },
    ]
  },
  // {
  // path: 'team/:id',
  // component: require('../pages/team/Detail').default,
  // name: 'teamDetail',
  // redirect: { name: 'teamDetailBase' },
  // children:[
  //   {
  //     path: 'base',
  //     component: require('../pages/team/team/Base').default,
  //     name: 'teamDetailBase',
  //     meta:{
  //       name:"teamDetailBase"
  //     }
  //   },
  //   {
  //     path: 'control',
  //     component: require('../pages/team/team/Control').default,
  //     name: 'teamControl',
  //     meta:{
  //       name:"teamControl"
  //     }
  //   },
  //   {
  //     path: 'metric',
  //     component: require('../pages/team/team/Metric').default,
  //     name: 'teamMetric',
  //     meta:{
  //       name:"teamMetric"
  //     }
  //   },
  //   {
  //     path: 'model',
  //     component: require('../pages/team/team/Model').default,
  //     name: 'teamDetailModel',
  //     meta:{
  //       name:"teamDetailModel"
  //     }
  //   },
  //   {
  //     path: 'log',
  //     component: require('../pages/team/team/Log').default,
  //     name: 'teamLog',
  //     meta:{
  //       name:"teamLog"
  //     }
  //   },
  //   {
  //     path: 'map',
  //     component: require('../pages/team/team/Map').default,
  //     name: 'teamDetailMap',
  //     meta:{
  //       name:"teamDetailMap"
  //     }
  //   },
  //   {
  //     path: 'subteam',
  //     component: require('../pages/team/team/Subteam').default,
  //     name: 'teamSubteam',
  //     meta:{
  //       name:"teamSubteam"
  //     }
  //   },
  //   {
  //     path: 'debug',
  //     component: require('../pages/team/team/Debug').default,
  //     name: 'teamDebug',
  //     meta:{
  //       name:"teamDebug"
  //     }
  //   },
  //   {
  //     path: 'hook',
  //     component: require('../pages/hook/Hook').default,
  //     name: 'teamHook',
  //     meta:{
  //       name:"teamHook"
  //     }
  //   },
  //   {
  //     path: 'setting',
  //     component: require('../pages/team/team/Setting').default,
  //     name: 'teamSetting',
  //     meta:{
  //       name:"teamSetting"
  //     }
  //   },
  // ]
// }
]
export default team