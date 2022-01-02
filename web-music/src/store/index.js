import reducer from './reducer'
import {createStore,applyMiddleware,compose} from 'redux'

//应用中间件
import reduxthunk from 'redux-thunk'//引入'redux-thunk'中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;
const middle = applyMiddleware(reduxthunk)
export const store = createStore(reducer,composeEnhancers(middle))
// store.subscribe(()=>console.log(store.getState()))