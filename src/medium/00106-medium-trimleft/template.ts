type TrimLeft<S extends string> = S extends `${infer F extends
  | " "
  | "\n"
  | "\t"}${infer R}`
  ? TrimLeft<R>
  : S;
