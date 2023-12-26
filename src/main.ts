// vue core
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
// init
import useElPlus from '@/components/useElPlus'
import setupGlobDirectives from '@/directive'
// css
import './tailwind.css'
import 'element-plus/dist/index.css'
import '@/utils/page/rem'
import '@/design/index.less'
import '@/assets/style/reset.css'
import 'highlight.js/styles/github-dark-dimmed.css'

const app = createApp(App)

// Register global directive
setupGlobDirectives(app)

/** mount element-plus */
useElPlus(app)

app.use(store).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
