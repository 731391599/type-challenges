type FilterKey<P> = string extends P ? never : number extends P ? never : symbol extends P ? never : P

type RemoveIndexSignature<T> = {
  [P in keyof T as FilterKey<P>]: T[P];
};
