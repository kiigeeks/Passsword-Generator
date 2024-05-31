import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store.js';
import App from './App.jsx'
import './index.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import id from 'javascript-time-ago/locale/id.json'
import 'react-toastify/dist/ReactToastify.css';

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(id)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
        </Provider>
	</React.StrictMode>,
)
