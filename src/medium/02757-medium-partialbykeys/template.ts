type PartialByKeys<T, K = keyof T> = MergeObjects<{
    [P in Exclude<keyof T, K>]: T[P]
} & {
        [P in keyof T as P extends K ? P : never]?: T[P]
    }>


type MergeObjects<T> = {
    [P in keyof T]: T[P];
};
