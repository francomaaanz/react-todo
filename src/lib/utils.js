export const partial = (fn, ...args) => fn.bind(null, ...args)
export const pipe = (...fns) => fns.reduce(_pipe)
//private function
const _pipe = (f, g) => (...args) => g(f(...args))

