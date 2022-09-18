type LookUp<U extends { type: any }, T> = U extends { type: T } ? U : never;
