import { App } from 'vue'
import VcContainer from './vc-container.vue'
import VcHeader from './vc-header.vue'
import VcFooter from './vc-footer.vue'
import VcMain from './vc-main.vue'
import VcAside from './vc-aside.vue'

export default {
  install(app: App) {
    console.log('安装组件')
    app.component(VcContainer.name, VcContainer)
    app.component(VcHeader.name, VcHeader)
    app.component(VcFooter.name, VcFooter)
    app.component(VcMain.name, VcMain)
    app.component(VcAside.name, VcAside)
  }
}
