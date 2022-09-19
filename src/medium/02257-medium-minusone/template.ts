type MinusOne<T extends number, Array extends unknown[] = []> =
  Array["length"] extends T
  ? Array extends [infer First, ...infer Rest]
  ? Rest["length"]
  : never
  : MinusOne<T, [T, ...Array]>
