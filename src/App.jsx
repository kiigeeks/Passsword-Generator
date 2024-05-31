import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import HistoryLogs from './pages/History'

function App() {
	const [showHistory, setShowHistory] = useState(false)

	return (
		<>
			{showHistory 
				? <HistoryLogs setShowHistory={setShowHistory} />
				: <Home setShowHistory={setShowHistory} />
			}

			<ToastContainer />
		</>
	)
}

export default App
