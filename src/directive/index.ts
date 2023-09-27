import type { App } from 'vue'
import { lazy } from './v-lazy'
import { clickoutside } from './v-clickoutside'
const directives = [lazy, clickoutside]
const createDirective = (app: App<Element>) => {
  directives.forEach((item) => {
    app.directive(item.name, item.method)
  })
}
export default createDirective
