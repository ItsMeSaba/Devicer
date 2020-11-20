import './App.css';
import { useEffect, useState } from 'react';

import Welcome from './pages/welcome/welcome';
import Main from './pages/main/main';

function App() {
	let [welcome, setWelcome] = useState(true); 
	
	useEffect(() => {
		document.documentElement.style.setProperty('--bodyHeight', `${window.innerHeight}px`); 
	}, [])

  	return (
    	<div className="App">
			{ welcome && <Welcome setWelcome={() => setWelcome(false)}/> }
			{ !welcome && <Main /> }
    	</div>
  	);
}

export default App;
