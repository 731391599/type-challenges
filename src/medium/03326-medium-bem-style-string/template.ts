type BEM<B extends string, E extends string[], M extends string[]> =
    `${B}${E[number] extends '' ? '' : `__${E[number]}`}${M[number] extends '' ? '' : `--${M[number]}`}`