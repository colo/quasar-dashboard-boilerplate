import Chart from 'chart.js'
import { initGlobalOptions } from '@skins/creativetim/argon/components/Charts/config'
export default {
  mounted () {
    initGlobalOptions(Chart)
  }
}
