type ArrayInfo<T> = T extends (infer B)[] ? B : never

export function chooseRandomElement<T>(a: T extends any[] ? T : never): ArrayInfo<T> {
  let length = a.length
  return a[Math.floor(Math.random() * length)]
}
