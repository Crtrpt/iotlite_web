
const product  =[
  {
    path: 'product',
    component: require('../pages/product/Index').default,
    name: 'product',
    meta:{
      name:"product"
    }
  },
  {
  path: 'product/:sn',
  component: require('../pages/product/Detail').default,
  name: 'productDetail',
  redirect: { name: 'productDetailBase' },
  meta:{
    name:"productDetail"
  },
  children:[
    {
      path: 'base',
      component: require('../pages/product/product/Base').default,
      name: 'productDetailBase',
      meta:{
        name:"productDetailBase"
      }
    },
    {
      path: 'model',
      component: require('../pages/product/product/Model').default,
      name: 'productDetailModel',
      meta:{
        name:"productDetailModel"
      }
    },
    {
      path: 'map',
      component: require('../pages/product/product/Map').default,
      name: 'productDetailMap',
      meta:{
        name:"productDetailMap"
      }
    },
    {
      path: 'setting',
      component: require('../pages/product/product/Setting').default,
      name: 'productDetailSetting',
      meta:{
        name:"productDetailSetting"
      }
    },
    {
      path: 'device',
      component: require('../pages/product/product/Device').default,
      name: 'productDeviceList',
      meta:{
        name:"productDeviceList"
      }
    },
    {
      path: 'version',
      component: require('../pages/product/product/Version').default,
      name: 'productDetailVersion',
      meta:{
        name:"productDetailVersion"
      }
    },
    {
      path: 'hook',
      component: require('../pages/hook/Hook').default,
      name: 'productDetailHook',
      meta:{
        name:"productDetailHook"
      }
    },
    {
      path: 'setting',
      component: require('../pages/product/product/Setting').default,
      name: 'productDetailSetting',
      meta:{
        name:"productDetailSetting"
      }
    },
  ]
  },
  {
    path: 'product/:sn/version/:version',
    component: require('../pages/version/Detail').default,
    name: 'version',
    redirect: { name: 'versionBase' },
    meta:{
      name:"productDetail"
    },
    children:[
      {
        path: 'base',
        component: require('../pages/version/version/Base').default,
        name: 'versionBase',
        meta:{
          name:"versionBase"
        }
      },
      {
        path: 'model',
        component: require('../pages/version/version/Model').default,
        name: 'versionModel',
        meta:{
          name:"versionModel"
        }
      },
      {
        path: 'device',
        component: require('../pages/version/version/Device').default,
        name: 'versionDevice',
        meta:{
          name:"versionDevice"
        }
      },
      {
        path: 'setting',
        component: require('../pages/version/version/Setting').default,
        name: 'versionSetting',
        meta:{
          name:"versionSetting"
        }
      }
    ]
  }
]
export default product