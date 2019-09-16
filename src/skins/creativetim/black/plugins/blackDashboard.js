import SideBar from '@skins/creativetim/black/components/SidebarPlugin'
import Notify from '@skins/creativetim/black/components/NotificationPlugin'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import RTLPlugin from './RTLPlugin'

// css assets
import '@skins/creativetim/black/assets/sass/black-dashboard.scss'
import '@skins/creativetim/black/assets/css/nucleo-icons.css'
import '@skins/creativetim/black/assets/demo/demo.css'

export default {
  install (Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(SideBar)
    Vue.use(Notify)
    Vue.use(RTLPlugin)
  }
}
