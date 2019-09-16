import '@skins/creativetim/argon/assets/vendor/nucleo/css/nucleo.css'
import '@skins/creativetim/argon/assets/scss/argon.scss'
import globalComponents from './globalComponents'
import globalDirectives from './globalDirectives'
import SidebarPlugin from '@skins/creativetim/argon/components/SidebarPlugin/index'
import NotificationPlugin from '@skins/creativetim/argon/components/NotificationPlugin/index'

export default {
  install (Vue) {
    Vue.use(globalComponents)
    Vue.use(globalDirectives)
    Vue.use(SidebarPlugin)
    Vue.use(NotificationPlugin)
  }
}
