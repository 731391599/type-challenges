type FlattenDepth<T extends unknown[], S extends number = 1, U extends unknown[] = []> =
    U["length"] extends S
    ? T
    : T extends [infer First, ...infer Rest]
    ? First extends unknown[] ?
    [...FlattenDepth<First, S, [...U, 1]>, ...FlattenDepth<Rest, S, U>]
    : [First, ...FlattenDepth<Rest, S, U>]
    : T