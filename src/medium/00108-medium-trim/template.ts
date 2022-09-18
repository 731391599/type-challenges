type WS = " " | "\n" | "\t";

type Trim<S extends string> = S extends `${WS}${infer R}`
  ? Trim<R>
  : S extends `${infer R}${WS}`
  ? Trim<R>
  : S;
