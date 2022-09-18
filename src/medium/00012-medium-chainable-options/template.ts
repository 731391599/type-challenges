type CheckKey<K extends string, V, T> = K extends keyof T
  ? T[K] extends V
    ? { error: `Key '${K}' already exists` }
    : K
  : K;

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: CheckKey<K, V, T>,
    value: V
  ): Chainable<Omit<T, K> & { [P in K]: V }>;
  get(): T;
};
