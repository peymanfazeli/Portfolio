import React, { useState, useEffect } from "react";
// styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Menu from './components/Menu';
import Header from './components/Header';

const getInitialTheme = () => {
	const storedTheme = localStorage.getItem("theme");
	if (storedTheme) {
		return storedTheme;
	}
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };


function App() {
	const [ theme, setTheme ] = useState(getInitialTheme());
	useEffect(() => {
		document.body.classList.remove("theme-light", "theme-dark");
		document.body.classList.add(`theme-${theme}`);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	}

	
	
	return (
		<div className="App d-flex flex-column justify-content-center align-items-center">
			<div className="d-flex" style={{width: '100%'}}>
				<Menu  theme={theme} onThemeToggle={toggleTheme} />
			</div>
			<header className="App-header">
				<Header />
			</header>
		</div>
	);
}

export default App;
