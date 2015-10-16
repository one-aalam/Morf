/**
 * 
 * Server
 *
 * @author Aftab Alam <one@aalam.inimport>
 */

import path from 'path';
import express from 'express';
import http from 'http';
import favicon from 'serve-favicon';
import webpack from 'webpack';
import bodyParser from 'body-parser';

import config from '../webpack/webpack.config.dev';

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();

const WEBPACK_PORT = 3001;
const port = isProduction ? (process.env.PORT || 3002) : WEBPACK_PORT;


if(isDeveloping){
	const compiler = webpack(config);

	app.use(require('webpack-dev-middleware')(compiler, {
	  noInfo: true,
	  publicPath: config.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler));

	app.listen(WEBPACK_PORT, 'localhost', function(err) {
	  if (err) {
	    console.log(err);
	    return;
	  }
  	console.log('Development server listening at %s', WEBPACK_PORT);
	});
}

// Conditional JS inclusion
app.set("js", isDeveloping ? "dev" : "min");
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');
//app.use(favicon(__dirname + '/favicon.ico'));
app.use('/public', express.static(__dirname + '/build'));
app.use('/', express.static(__dirname + '/public'));
// Conditional script loading
app.use(function(req, res, next) {
  if (req.url === "/scripts/bundle.js") {
    req.url = "/scripts/bundle." + app.get("js") + ".js";
  }
  next();
});

// Set up Routes for the application
// renders main React component with passed
// data and .ejs template
require('./routes/server-pages')(app);
require('./routes/server-apis')(app);

//  RESTful API
app.use(bodyParser.json({ type: 'application/json' }))

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.listen(9000, function () {
  console.log('Server running on port ' + port);
}); 

