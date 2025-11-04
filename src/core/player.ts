import Decimal from 'break_eternity.js'
import { reactive } from 'vue'

export function getInitialPlayerData() {
  return {
    antimatter: new Decimal(10),
  }
}

export let player = reactive(getInitialPlayerData())
