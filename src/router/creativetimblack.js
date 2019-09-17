
// const routes = []

const Dashboard = () => import(/* webpackChunkName: "dashboard" */'@skins/creativetim/black/pages/Dashboard.vue')
const Profile = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Profile.vue')
const Notifications = () => import(/* webpackChunkName: "common" */'@skins/creativetim/black/pages/Notifications.vue')
const Icons = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Icons.vue')
const Maps = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Maps.vue')
const Typography = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Typography.vue')
const TableList = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/TableList.vue')

const routes = [
  {
    path: '/',
    component: () => import('layouts/CreativeTimBlack.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        component: TableList
      }
    ]

    // children: [
    //   { path: '', component: () => import('pages/Index.vue') },
    // ]
  }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
