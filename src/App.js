import './App.css';
import { useEffect, useState } from 'react';

import Welcome from './pages/welcome/welcome';
import Main from './pages/main/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './pages/contact/contact';


function App() {
	let [welcome, setWelcome] = useState(true); 
	
	useEffect(() => {
		document.documentElement.style.setProperty('--bodyHeight', `${window.innerHeight}px`); 
	}, [])

  	return (
    	<div className="App">
			<Router>
				<Switch>

					<Route path='/' exact>
						{ welcome && <Welcome setWelcome={() => setWelcome(false)}/> }
						{ !welcome && <Main /> }
					</Route>

					<Route path='/contact'>
						<Contact />
					</Route>

				</Switch>
			</Router>
    	</div>
  	);
}

export default App;
