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
        ],

    },
    
    {
        path: 'team/:sn',
        component: require('../pages/team/Detail').default,
        name: 'teamDetail',
        redirect: { name: 'teamMember' },
        meta:{
            name:"teamDetail"
        },
        children:[
            {
                path: 'member',
                component: require('../pages/team/detail/Member').default,
                name: 'teamMember',
                meta:{
                    name:"teamMember"
                }
            },
            {
                path: 'setting',
                component: require('../pages/team/detail/Setting').default,
                name: 'teamSetting',
                meta:{
                    name:"teamSetting"
                }
            },
        ]
    }
];
export default team;