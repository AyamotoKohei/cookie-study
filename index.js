'use strict';

const http = require('http');
const server = http.createServer((req, res) => {
	const now = Date.now();

	// ブラウザ上で日本語が文字化けするのを防ぐ
	res.setHeader('Content-Type', 'text/plain;charset=utf-8');

	// Cookieとしてlast_accessというキー名でヘッダにセットする
	res.setHeader('Set-Cookie', `last_access=${now};`);
	
	// Cookieが取得できた時、last_accessからミリ秒を表す文字列を抜き出し、
	// parseInt()で数値に変化して代入する。Cookieが取得できなければnowを代入する
	const last_access_time = req.headers.cookie ? parseInt(req.headers.cookie.split('last_access=')[1]) : now;

	// 取得した最終アクセス時間のミリ秒表記をnew Date()に渡し、文字列に変換
	res.end(new Date(last_access_time).toString());
});

const port = 8000;
server.listen(port, () => {
	console.info(`Listening on ${port}`);
});
