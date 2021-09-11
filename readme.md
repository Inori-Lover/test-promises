# Test promise impl with [promises-es6-tests](https://www.npmjs.com/package/promises-es6-tests)

thanks to [all-promises](https://www.npmjs.com/package/all-promises), we can easy access any Promise impl which already pass [promises-aplus-tests](https://www.npmjs.com/package/promises-aplus-tests) unit test. this resp is build to start a test on one of impl;

# how to use
1. clone
2. `npm ci`
3. change index to [which impl](https://github.com/hax/all-promises) you want to test
  > p: if there is global.Promise, it would be inserted to first.
4. `npm start`

# For improvement

i dont know how to run mocha iterative; i have try worker but it seen mocha cant not run in a worker.
