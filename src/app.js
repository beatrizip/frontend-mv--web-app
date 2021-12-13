import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import routes from './routes'

import withContext from '@s-ui/hoc/lib/withContext'
import createClientContextFactoryParams from '@s-ui/react-initial-props/lib/createClientContextFactoryParams'
import contextFactory from './contextFactory'
import Context from '@s-ui/react-context'

import './index.scss'

import App from './components/App'

// contextFactory(createClientContextFactoryParams()).then(context => {
//   match(
//     {routes, history: browserHistory},
//     (err, redirectLocation, renderProps) => {
//       if (err) {
//         console.error(err)
//       }

//       const App = withContext(context)(Router)
//       ReactDOM.render(
//         <Context.Provider value={context}>
//           <App {...renderProps} />
//         </Context.Provider>,
//         document.getElementById('app')
//       )
//     }
//   )
// })

ReactDOM.render(
  <App />,

  document.getElementById('app')
)
