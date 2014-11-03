module.exports = {

	/**
	 * Checks a promise by making the call-back function test-safe
	 *
	 * @param {Promise} promise
	 * @param {function} fn
	 * @param {function} done
	 */
	promiseCheck: function (promise, fn, done) {

		promise.then(function () {
			try {
				fn.apply(this, arguments);
				done();
			} catch(err) {
				done(err);
			}
		}, function (err) {
			done(err);
		});
	}

};
