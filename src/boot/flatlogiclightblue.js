
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'expose-loader?jQuery!jquery' // eslint-disable-line
import 'expose-loader?$!jquery' // eslint-disable-line
// import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import VCalendar from 'v-calendar'
import * as VueGoogleMaps from 'vue2-google-maps'

// import store from './store';
// import router from './Routes';
// import App from './App';

import Layout from '@skins/flatlogic/lightblue/components/Layout/Layout'
import Typography from '@skins/flatlogic/lightblue/pages/Typography/Typography'
import Tables from '@skins/flatlogic/lightblue/pages/Tables/Tables'
import Notifications from '@skins/flatlogic/lightblue/pages/Notifications/Notifications'
import Icons from '@skins/flatlogic/lightblue/pages/Icons/Icons'
import Maps from '@skins/flatlogic/lightblue/pages/Maps/Maps'
import Charts from '@skins/flatlogic/lightblue/pages/Charts/Charts'
import Dashboard from '@skins/flatlogic/lightblue/pages/Dashboard/Dashboard'
import Login from '@skins/flatlogic/lightblue/pages/Login/Login'
import ErrorPage from '@skins/flatlogic/lightblue/pages/Error/Error'

import layoutStoreModule from '@skins/flatlogic/lightblue/store/layout'

/* eslint-disable no-new */

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default ({ app, router, store, Vue }) => {
  store.registerModule('layout', layoutStoreModule)

  // https://webpack.js.org/guides/dependency-management/#require-context
  const requireComponent = require.context(
    // Look for files in the current directory
    '@skins/flatlogic/lightblue/components',
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
    const componentName = 'FlatLogicLightBlue' + upperFirst(
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

  Vue.use(BootstrapVue)

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg'
    }
  })

  Vue.use(VCalendar, {
    firstDayOfWeek: 2 // Monday
  })

  Vue.config.productionTip = false

  router.addRoutes([
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'Error',
      component: ErrorPage
    },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
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
    }
  ])
}
