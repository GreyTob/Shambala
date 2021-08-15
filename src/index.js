import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
// import { ParallaxProvider } from 'react-scroll-parallax'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const application = (
  // <ParallaxProvider>
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <App />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  // </ParallaxProvider>
)

ReactDOM.render(application, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
