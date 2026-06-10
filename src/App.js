import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';

// pages
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";

// styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const rtlLangs = ['fa'];

function App() {
	const { i18n } = useTranslation();
	const dir = rtlLangs.includes(i18n.language) ? 'rtl' : 'ltr';

	useEffect(() => {
		document.documentElement.dir = dir;
		document.documentElement.lang = i18n.language;
	}, [dir, i18n.language]);

	return (
		<div className="App d-flex flex-column justify-content-center align-items-center">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<Aboutme />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
