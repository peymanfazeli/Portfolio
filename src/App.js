import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';

function App() {
	return (
		<div className="App d-flex flex-column justify-content-center align-items-center">
			<Menu />
			<header className="App-header">
				<Header />
			</header>
		</div>
	);
}

export default App;
