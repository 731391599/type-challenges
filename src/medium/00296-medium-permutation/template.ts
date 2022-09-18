type Permutation<T, C = T> = [T] extends [never]
  ? []
  : T extends C
  ? [T, ...Permutation<Exclude<C, T>>]
  : never;
