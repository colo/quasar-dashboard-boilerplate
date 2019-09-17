/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import * as VueGoogleMaps from 'vue2-google-maps'

import RouterPrefetch from 'vue-router-prefetch'
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
// import router from "./router/index";

import BlackDashboard from '@skins/creativetim/black/plugins/blackDashboard'
import i18n from '@skins/creativetim/black/i18n'
// import './registerServiceWorker'

// import DashboardLayout from '@skins/creativetim/black/layout/dashboard/DashboardLayout.vue'
// GeneralViews
import NotFound from '@skins/creativetim/black/pages/NotFoundPage.vue'

// Admin pages
// const Dashboard = () => import(/* webpackChunkName: "dashboard" */'@skins/creativetim/black/pages/Dashboard.vue')
// const Profile = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Profile.vue')
// const Notifications = () => import(/* webpackChunkName: "common" */'@skins/creativetim/black/pages/Notifications.vue')
// const Icons = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Icons.vue')
// const Maps = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Maps.vue')
// const Typography = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Typography.vue')
// const TableList = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/TableList.vue')

/* eslint-disable no-new */

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default ({ app, router, store, Vue }) => {
  app.i18n = i18n
  // store.registerModule('layout', layoutStoreModule)

  // https://webpack.js.org/guides/dependency-management/#require-context
  const requireComponent = require.context(
    // Look for files in the current directory
    '@skins/creativetim/black/components',
    // Do not look in subdirectories
    true,
    // Only include "_base-" prefixed .vue files
    /[\w-]+\.vue$/
  )

  // For each matching file name...
  requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = 'CreativeTimBlack' + upperFirst(
      camelCase(
        fileName
          // Remove the "./_" from the beginning
          // .replace(/^\.\/_/, '')
          // Remove the file extension from the end
          .replace(/\.\w+$/, '')
      )
    )
    // Globally register the component
    // console.log('componentName')
    Vue.component(componentName, componentConfig.default || componentConfig)
  })

  // Vue.config.productionTip = false
  Vue.use(BlackDashboard)
  // Vue.use(VueRouter);
  Vue.use(RouterPrefetch)

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg'
    }
  })

  router.addRoutes([
    // {
    //   path: '/',
    //   component: DashboardLayout,
    //   redirect: '/dashboard',
    //   children: [
    //     {
    //       path: 'dashboard',
    //       name: 'dashboard',
    //       component: Dashboard
    //     },
    //     {
    //       path: 'profile',
    //       name: 'profile',
    //       component: Profile
    //     },
    //     {
    //       path: 'notifications',
    //       name: 'notifications',
    //       component: Notifications
    //     },
    //     {
    //       path: 'icons',
    //       name: 'icons',
    //       component: Icons
    //     },
    //     {
    //       path: 'maps',
    //       name: 'maps',
    //       component: Maps
    //     },
    //     {
    //       path: 'typography',
    //       name: 'typography',
    //       component: Typography
    //     },
    //     {
    //       path: 'table-list',
    //       name: 'table-list',
    //       component: TableList
    //     }
    //   ]
    // },
    { path: '*', component: NotFound }
  ])
}
