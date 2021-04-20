import  MasterLayout  from "../pages/layout/master/MasterLayout";
import  UserLayout  from "../pages/layout/user/UserLayout";

import product from "./product";
import device from "./device";
import group from "./group";
import organization from "./organization";
import user from "./user";
import dashboard from "./dashboard";
import team from "./team";

var routes = [
  {
    path: '/',
    component: MasterLayout,
    name: 'root',
    redirect: { name: 'product' },
    children: [
      {
        path: 'home',
        component: require('../pages/Home').default,
        name: 'home',
        meta:{
          name:"home"
        }
      },
      ...dashboard,
      ...device,
      ...product,
      ...group,
      ...organization,
      ...user,
      ...team,
    ],
  },
  {
    path: '/passport',
    component: require('../pages/auth/Auth').default,
    name: 'login',
  },
  {
    path: '/register',
    component: require('../pages/auth/Register').default,
    name: 'register',
  },
  { path: '*', component:  require('../pages/NotFound').default }
];

export default routes;
