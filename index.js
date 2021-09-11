(async () => {

  const promisesES6Tests = require("promises-es6-tests");
  const { list } = require('all-promises')
  const assert = require("assert");

  const safePromise = global.Promise;
  delete global.Promise
  const results = []

  const { Promise, name, version } = list[0]

  // for (const { Promise, name, version } of list) {
    const adapter = {
      deferred() {
        let promise
        let resolve
        let reject

        promise = new Promise((r, j) => {
          resolve = r;
          reject = j;
        })

        return { promise, resolve, reject }
      },
      defineGlobalPromise(globalScope) {
        delete global.Promise
        globalScope.Promise = Promise
        globalScope.assert = assert
      },
      removeGlobalPromise(globalScope) {
        delete globalScope.Promise
        delete globalScope.assert
      }
    }

    results.push(
      await new safePromise(r => {
        promisesES6Tests(adapter, {}, function (err) {
            // tests complete; output to console; `err` is number of failures
            let result = `${name}@${version}: pass all case!`
            if (err?.failures) {
              result = `${name}@${version}: fail ${err.failures} case.`
            }

            console.log(result)
            r(err)
        });
      })
    )
  // }

  require('fs').writeFileSync('./results.json', JSON.stringify(results, undefined, 4))

  console.log('write file success')
})();