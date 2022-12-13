import VcContainer from './src/layout/vc-container.vue'
import VcHeader from './src/layout/vc-header.vue'
import VcFooter from './src/layout/vc-footer.vue'
import VcMain from './src/layout/vc-main.vue'
import VcAside from './src/layout/vc-aside.vue'

const components = [VcContainer, VcHeader, VcFooter, VcMain, VcAside]

const install = function (app) {
  if (install.installed) return
  console.log('全部组件安装完毕')
  components.map((c) => app.component(c.name, c))
}

export default {
  install
}
