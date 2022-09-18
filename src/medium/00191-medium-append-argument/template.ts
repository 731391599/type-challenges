type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer RT
  ? (...args: [...R, A]) => RT
  : never;
