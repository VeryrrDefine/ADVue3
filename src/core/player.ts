import Decimal from 'break_eternity.js'
import { reactive } from 'vue'

export function getInitialPlayerData() {
  return {
    antimatter: new Decimal(10),
    options: {
      lastOpenTab: 0,
    },
  }
}

export let player = reactive(getInitialPlayerData())
export type Player = ReturnType<typeof getInitialPlayerData>
