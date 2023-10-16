import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
	const [name, setName] = useState('');

	return (
		<Router>
			<div>
				<Routes>
					<Route path='/' element={<LoginPage setName={setName} />} />
					<Route path='/chat' element={<MainPage name={name} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
