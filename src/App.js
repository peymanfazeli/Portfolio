import React, { useState, useEffect } from "react";
import styled from "styled-components";
// styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// components
import Menu from './components/Menu';
import Header from './components/Header';
import Section from "./components/Section";
import config from "./config";
// styled components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

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
			<Container>
				<Menu  theme={theme} onThemeToggle={toggleTheme} />
				<Header />
				<Section title="Skills" config={config.skills} />
				<Section title="Languages" config={config.Languages} />
				<Section title="Experiences" config={config.experiences} />
			</Container>
		</div>
	);
}

export default App;
