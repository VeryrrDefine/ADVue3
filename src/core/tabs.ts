export const TabComponents = {} as const

export type ISubtab = {
    key: string
    name: string
    symbol: string
    component: keyof typeof TabComponents
    id: number
    hidable: boolean
    condition?: () => boolean
}

export type ITab = {
    key: string
    name: string
    hideAt?: number
    id: number
    hidable: boolean
    subtabs: ISubtab[]
}

export const tab = [
    {
        key: 'dimensions',
        name: 'Dimensions',
        hideAt: 2.9,
        id: 0,
        hidable: true,
        subtabs: [],
    },
] satisfies ITab[]
