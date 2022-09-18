type Falsy = 0 | "" | [] | false | { [K in string]: never };

type AnyOf<T extends readonly unknown[]> = T[number] extends Falsy
  ? false
  : true;
