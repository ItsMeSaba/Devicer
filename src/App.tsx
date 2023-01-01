import './App.css';
import { useEffect, useState } from 'react';

import Welcome from './pages/welcome/Welcome';
import Main from './pages/main/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';


function App() {
	let [welcome, setWelcome] = useState(true); 
	
	useEffect(() => {
		document.documentElement.style.setProperty('--bodyHeight', `${window.innerHeight}px`); 
	}, [])

  	return (
    	<div className="App">
			<Router>
				<Routes>

					<Route path='/' element={<Welcome />} />

					<Route path='/devices' element={<Main />} />
					{/* <Route path='/' element={<Contact />} /> */}
						{/* { welcome && <Welcome setWelcome={() => setWelcome(false)}/> } */}
						{/* { !welcome && <Main /> } */}
						{/* <Main />
					</Route> */}

					{/* <Route path='/contact'>
						<Contact />
					</Route> */}

				</Routes>
			</Router>
    	</div>
  	);
}

export default App;
