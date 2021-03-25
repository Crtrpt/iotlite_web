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
]
export default team