declare module '@holaluz/margarita' {
  import { PluginFunction } from 'vue'

  export const install: PluginFunction<Record<string, unknown>>

  module 'vue/types/vue' {
    interface Vue {
      $layout: {
        getResponsivePropValue: (_: string | string[]) => string
        readonly currentBreakpoint: 'mobile' | 'tablet' | 'desktop' | null
      }
    }
  }
}
