import { createStore, applyMiddleware } from 'redux'
 import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import history from '../helpers/history'
// import callAPIMiddleware from '../lib/callAPIMiddleware'
import reducer from './reducers/'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true
})

const store = createStore(
  reducer,
  composeWithDevTools(
    /* logger must be the last middleware in chain to log actions */
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      logger
    )
  )
)


export default store