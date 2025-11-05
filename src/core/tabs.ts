import { fromBitMask } from '@/lib/bitmask'
import { player } from './player'

export const TabComponents = {
    A: 0,
} as const

export type ISubtab = {
    // key: string
    name: string
    symbol: string
    component: keyof typeof TabComponents
    id: number
    hidable: boolean
    condition?: () => boolean
}

export type ITab = {
    // key: string
    name: string
    hideAt?: number
    id: number
    hidable: boolean
    subtabs: ISubtab[]
}

export const tab = [
    {
        // key: 'dimensions',
        name: 'Dimensions',
        hideAt: 2.9,
        id: 0,
        hidable: true,
        subtabs: [
            {
                name: 'b',
                id: 0,
                hidable: true,
                symbol: 'B',
                component: 'A',
            },
            {
                name: '安提玛特带们森',
                id: 1,
                hidable: true,
                symbol: 'C',
                component: 'A',
            },
        ],
    },
    {
        // key: 'dimensions',
        name: 'Dimensions222',
        hideAt: 2.9,
        id: 1,
        hidable: true,
        subtabs: [
            {
                name: 'b',
                id: 0,
                hidable: true,
                symbol: 'B',
                component: 'A',
            },
        ],
    },
] as const satisfies ITab[]

export function isTabOpened(id: number) {
    return player.options.currentTab == id
}

export function clickTab(id: number) {
    if (player.options.currentTab) {
    }
    player.options.currentTab = id
}
export function isSubtabOpened(id: number, sub: number) {
    let a = player.options.subtabOpens[id]
    return a == sub
}
export function clickSubtab(id: number, sub: number) {
    clickTab(id)
    player.options.subtabOpens[id] = sub
}
