
// const routes = []

import Typography from '@skins/flatlogic/lightblue/pages/Typography/Typography'
import Tables from '@skins/flatlogic/lightblue/pages/Tables/Tables'
import Notifications from '@skins/flatlogic/lightblue/pages/Notifications/Notifications'
import Icons from '@skins/flatlogic/lightblue/pages/Icons/Icons'
import Maps from '@skins/flatlogic/lightblue/pages/Maps/Maps'
import Charts from '@skins/flatlogic/lightblue/pages/Charts/Charts'
import Dashboard from '@skins/flatlogic/lightblue/pages/Dashboard/Dashboard'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'components/icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'components/maps',
        name: 'Maps',
        component: Maps
      },
      {
        path: 'components/charts',
        name: 'Charts',
        component: Charts
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
