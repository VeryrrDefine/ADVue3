import Decimal from 'break_eternity.js'
import { reactive } from 'vue'
import { tab } from './tabs'
import type { FixedLengthArray } from 'type-fest'

export function getInitialPlayerData() {
    return {
        antimatter: new Decimal(10),
        options: {
            currentTab: 0,
            subtabOpens: new Array(tab.length).fill(0) as number[],
        },
    }
}

export let player = reactive(getInitialPlayerData())
export type Player = ReturnType<typeof getInitialPlayerData>
