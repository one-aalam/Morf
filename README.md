Morf (WIP)
=====================

A Node/React/Redux/Webpack based boilerplate with isomorphic abilities

## Ambition

Starting point for applications with
* Isomorphic view
* Isomorphic styles
* Isomorphic routing
* Isomorphic data fetching
* Isomorphic configuration
* Isomorphic localization

with all development aids like

* Hot reloading React components

## Demo

![](http://i.imgur.com/AhGY28T.gif)

```
git clone https://github.com/one-aalam/morf
cd morf
npm install
npm start
open http://localhost:3001
```

Then go ahead and edit files inside `src` (any file except `client.js`).

## What’s Inside



## Troubleshooting

### I don’t see the syntax error overlay!

Make sure your react-app is not attached to `document.body` as the client overlay provided by [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) will render into `document.body`.
Attaching the React root node to `document.body` requires extra caution, as many third-party packages will append their markup to the body as well. React will replace the entire contents in the body on every re-render. Thus you will not see the additional markup.

It’s always better to render your React app in a `#root` DOM element.

```js
import React from 'react'
import { App } from 'app'

React.render(<App />, document.getElementById('root'))
```

## Discussion


## License

CC0 (public domain)
