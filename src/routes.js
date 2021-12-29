import React from 'react'
import {Route, Router, IndexRoute} from '@s-ui/react-router'
import loadPage from '@s-ui/react-initial-props/lib/loadPage'
import contextFactory from './contextFactory'

const Home = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Home" */ './pages/Home')
)

const Detail = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "Detail" */ './pages/Detail')
)

export default (
  <Router>
    <Route>
      <Route path="/">
        <IndexRoute getComponent={Home} />
      </Route>
      <Route path="/movie/:id" getComponent={Detail} />
    </Route>
  </Router>
)
