import React, { memo } from 'react'
import { Provider } from 'react-redux'
import {store} from './store'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppPlayerBar from './pages/player/app-player-bar'
export default memo(function App() {
  return (
    <Provider store={store}>
      <AppHeader></AppHeader>
      <hr/>
      <AppFooter></AppFooter>
      <AppPlayerBar></AppPlayerBar>
    </Provider>
  )
})
