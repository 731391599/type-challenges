type IsUnion<T, C = T> = [T] extends [never]
  ? false
  : T extends C
  ? Equal<[T], [C]> extends true
    ? false
    : true
  : false;