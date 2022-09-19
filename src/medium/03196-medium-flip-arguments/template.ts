type FlipArguments<T extends (...args: any[]) => unknown> = T extends (...args: infer Args) => infer RT
    ? (...args: Reverse<Args>) => RT
    : never
