type PercentageParser<A extends string> =
  A extends `${infer First}${infer Rest}` ?
  First extends "+" | "-"
  ? Rest extends `${infer Num}%` ? [First, Num, '%'] : [First, Rest, '']
  : A extends `${infer Num}%` ? ["", Num, '%'] : ["", A, '']
  : ["", "", ""]
