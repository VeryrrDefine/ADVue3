import { createApp } from 'vue'
import { player } from './player'
import App from '@/App'
import { format } from '@/lib/format'

declare global {
  interface Window {
    player?: typeof player
    format?: typeof format
  }
}
export function init() {
  window.player = player
  window.format = format
  createApp(App).mount('#app')
}
