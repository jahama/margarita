import { PluginFunction } from 'vue'

// augment typings of Vue.js
import './vue'

export { Breakpoint } from './margarita'

export declare function install(): PluginFunction<Record<string, unknown>>
