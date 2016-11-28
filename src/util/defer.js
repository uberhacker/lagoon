// @flow

type Defer<R> = {
  promise: Promise<R>,
  resolve: (result: Promise<R> | R) => void,
  reject: (error: any) => void,
};

/**
 * Creates a defer object, which is useful to combine
 * Promises with nodelike callback interfaces
 */
export default function defer(label?: string): Defer<*> {
  const deferred = {};

  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  }, label);

  return deferred;
}
