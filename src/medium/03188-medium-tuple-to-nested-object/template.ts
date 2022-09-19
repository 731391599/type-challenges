type TupleToNestedObject<T extends unknown[], U> = T extends [infer First extends string, ...infer Rest]
    ? {
        [P in First]: TupleToNestedObject<Rest, U>
    }
    : U
