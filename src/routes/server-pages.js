
import React from 'react';
var Router = require('react-router');
var routes = require('./shared.js');
var ReactDOM = require('react-dom/server');
var	App = React.createFactory(require('../components/App'));

module.exports = function(app) {

  app.get('/*', function (req, res) { 

    res.render('index.ejs',{
      reactData:{},
      reactHTML: '<b>Hello, React!</b>'
    });

    /*
    Router.run(routes, req.url, (Handler) => {
      var reactOutput = React.renderToString(<Handler/>);
      res.render('index.ejs',{reactOutput: reactHtml});
    });*/

  });


};
