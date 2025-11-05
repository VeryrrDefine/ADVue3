export interface News {
    unlocked?: boolean
    id: string
    text: string
}

export const GameDatabase = {
    news: [
        {
            id: '0',
            text: 'bxuiofujiasodjioajdioas',
        },
        {
            id: '1',
            text: 'timeout seeted, 1000ms.',
        },
        {
            id: '2',
            text: 'GameDatabaseGameDatabaseGameDatabaseGameDatabase',
        },
    ] satisfies News[],
} as const
