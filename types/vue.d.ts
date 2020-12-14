import Vue from 'vue'
import { Layout } from './margarita'

declare module 'vue/types/vue' {
  interface Vue {
    $layout: Layout
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    layout: Layout
  }
}
