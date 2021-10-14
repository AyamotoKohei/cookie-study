'use strict';

const http = require('http');
const server = http.createServer((req, res) => {
	const now = Date.now();
	// Cookieとしてlast_accessというキー名でヘッダにセットする
	res.setHeader('Set-Cookie', `last_access=${now};`);
	
	res.end('hi');
});

const port = 8000;
server.listen(port, () => {
	console.info(`Listening on ${port}`);
});
