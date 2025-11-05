import type Decimal from 'break_eternity.js'

export function format(value: Decimal, places = 0, placesUnder1000 = 0, bypassEND = false) {
    return value.toString()
}
