/**
* "bootstrap-vue": "2.0.0-rc.15",
**/
/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import * as VueGoogleMaps from 'vue2-google-maps'

// import RouterPrefetch from 'vue-router-prefetch'

import ArgonDashboard from '@skins/creativetim/argon/plugins/argon-dashboard'

// import DashboardLayout from '@skins/creativetim/argon/layout/DashboardLayout'
import AuthLayout from '@skins/creativetim/argon/layout/AuthLayout'
/* eslint-disable no-new */

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Admin pages
// const Dashboard = () => import(/* webpackChunkName: "dashboard" */'@skins/creativetim/black/pages/Dashboard.vue')
// const Profile = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Profile.vue')
// const Notifications = () => import(/* webpackChunkName: "common" */'@skins/creativetim/black/pages/Notifications.vue')
// const Icons = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Icons.vue')
// const Maps = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Maps.vue')
// const Typography = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/Typography.vue')
// const TableList = () => import(/* webpackChunkName: "common" */ '@skins/creativetim/black/pages/TableList.vue')

/* eslint-disable no-new */

export default ({ app, router, store, Vue }) => {
  // app.i18n = i18n
  // store.registerModule('layout', layoutStoreModule)

  // https://webpack.js.org/guides/dependency-management/#require-context
  const requireComponent = require.context(
    // Look for files in the current directory
    '@skins/creativetim/argon/components',
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
    const componentName = 'CreativeTimArgon' + upperFirst(
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
  Vue.use(ArgonDashboard)
  // Vue.use(VueRouter);
  // Vue.use(RouterPrefetch)

  // Vue.use(VueGoogleMaps, {
  //   load: {
  //     key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg'
  //   }
  // })

  router.addRoutes([
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import(/* webpackChunkName: "demo" */ '@skins/creativetim/argon/views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "demo" */ '@skins/creativetim/argon/views/Register.vue')
        }
      ]
    }
  ])
}
