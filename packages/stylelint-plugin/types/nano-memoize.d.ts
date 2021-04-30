declare module "nano-memoize" {
  const nanomemoize: <Fn extends (...params: any[]) => any>(
    fn: Fn,
    options?: {
      // only use the provided maxArgs for cache look-up, useful for ignoring final callback arguments
      maxArgs?: number
      // go ahead and call memoized multi-args functions after a number of milliseconds via a timeout after the
      // cached result has been returned, perhaps to ensure that callbacks are invoked, does not cache the timemout result
      // e.g. nanomemoize(function(a,b,cb) { var result = a + b; cb(result); return result; },{maxArgs:2,callTimeout:0});
      callTimeout?: number
      // number of milliseconds to cache a result, set to `Infinity` or `-1` to never create timers or expire
      maxAge?: number
      // the serializer/key generator to use for single argument functions (optional, not recommended)
      // must be able to serialize objects and functions, by default a WeakMap is used internally without serializing
      serializer?: function
      // the equals function to use for multi-argument functions (optional, try to avoid) e.g. deepEquals for objects
      equals?: function
      // forces the use of multi-argument paradigm, auto set if function has a spread argument or uses `arguments` in its body.
      vargs?: boolean
    }
  ) => Fn
  export default nanomemoize
}
