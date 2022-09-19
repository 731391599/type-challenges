type ObjectEntries<T, K = keyof T> = K extends keyof T
    ? [K, T[K] extends undefined ? undefined : Exclude<T[K], undefined>]
    : never