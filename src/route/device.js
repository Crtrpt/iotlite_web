const device  =[
  {
    path: 'device',
    component: require('../pages/device/Index').default,
    name: 'device',
    meta:{
      name:"device"
    }
  },
  {
  path: 'device/:id',
  component: require('../pages/device/Detail').default,
  name: 'deviceDetail',
  redirect: { name: 'deviceDetailBase' },
  meta:{
    name:"deviceDetail"
  },
  children:[
    {
      path: 'base',
      component: require('../pages/device/device/Base').default,
      name: 'deviceDetailBase',
      meta:{
        name:"deviceDetailBase"
      }
    },
    {
      path: 'control',
      component: require('../pages/device/device/Control').default,
      name: 'deviceControl',
      meta:{
        name:"deviceControl"
      }
    },
    {
      path: 'metric',
      component: require('../pages/device/device/Metric').default,
      name: 'deviceMetric',
      meta:{
        name:"deviceMetric"
      }
    },
    {
      path: 'model',
      component: require('../pages/device/device/Model').default,
      name: 'deviceDetailModel',
      meta:{
        name:"deviceDetailModel"
      }
    },
    {
      path: 'log',
      component: require('../pages/device/device/Log').default,
      name: 'deviceLog',
      meta:{
        name:"deviceLog"
      }
    },
    {
      path: 'map',
      component: require('../pages/device/device/Map').default,
      name: 'deviceDetailMap',
      meta:{
        name:"deviceDetailMap"
      }
    },
    {
      path: 'subdevice',
      component: require('../pages/device/device/SubDevice').default,
      name: 'deviceSubDevice',
      meta:{
        name:"deviceSubDevice"
      }
    },
    {
      path: 'debug',
      component: require('../pages/device/device/Debug').default,
      name: 'deviceDebug',
      meta:{
        name:"deviceDebug"
      }
    },
  ]
}
]
export default device