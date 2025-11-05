export function fromBitMask(mask: number) {
    if (!Number.isInteger(mask)) throw new TypeError('Mask value not valid: ' + mask)

    let mask2 = mask
    const bitIndices = []
    let currentIndex = 0
    while (mask2 !== 0) {
        if (mask2 & 1) bitIndices.push(currentIndex)
        mask2 >>= 1
        ++currentIndex
    }
    return bitIndices
}
