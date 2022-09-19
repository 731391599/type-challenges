

type FilterValue<P extends keyof T, T, U> = T[P] extends U ? P : never

type PickByType<T, U> = {
  [P in keyof T as FilterValue<P, T, U>]: T[P]
}
