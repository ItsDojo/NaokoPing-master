module.exports = (url, interval, ping, options) => {
	if (isNaN(interval)) throw 'The second argument, the `interval` has to be a number. Instead, ' + interval + ' has been passed as an argument.';
	var NaokoPing = () => {
		var pingNK = ping();
		if (isNaN(pingNK)) return console.warn('Nothing has been sent because the third argument need to be a function that returns a number. Right now it is: ' + pingNK);
		try {
			require('node-fetch')(url + (options && options.sendInQuery ? '?ping=' + pingNK : ''), {
				method: 'POST',
				body: options && !options.sendInQuery ? (options && options.sendInJSON ? JSON.stringify({ ping: pingNK }) : '' + pingNK) : '',
				headers: { 'Content-Type': 'application/' + (options && options.sendInJSON ? 'json' : 'text') }
			});
		} catch (e) { console.warn(e) }
	}
	if (options && options.sendAtStart) NaokoPing();
	setInterval(NaokoPing, interval);
}
