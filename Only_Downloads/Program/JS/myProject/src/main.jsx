import ReactDOM from 'react-dom/client'
import "./Styles/index.css"
import App from './Components/App.jsx'
import { Provider } from 'react-redux'
import {store} from "./Store/store.js"
import Product from './Components/Product.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="main">
  <Provider store={store}>
    <App />
    <Product/>
  </Provider>
  </div>
)
