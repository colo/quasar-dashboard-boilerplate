
// const routes = []

// import Layout from '@skins/flatlogic/singapp/components/Layout/Layout'
import Typography from '@skins/flatlogic/singapp/pages/Typography/Typography'
import Tables from '@skins/flatlogic/singapp/pages/Tables/Basic'
import Notifications from '@skins/flatlogic/singapp/pages/Notifications/Notifications'
import Icons from '@skins/flatlogic/singapp/pages/Icons/Icons'
import Maps from '@skins/flatlogic/singapp/pages/Maps/Google'
import Charts from '@skins/flatlogic/singapp/pages/Charts/Charts'
import Dashboard from '@skins/flatlogic/singapp/pages/Dashboard/Dashboard'
const routes = [
  {
    path: '/',
    component: () => import('layouts/FlatLogicSingApp.vue'),
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
