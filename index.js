'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
	if (process.platform != 'darwin') app.quit();
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({width: 1024, height: 768});

	//	↓を入れるとデフォルトで開発ツールが開いた状態になる
	mainWindow.openDevTools();

	mainWindow.loadUrl('file://' + __dirname + '/index.html');
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});
