import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";

// styles
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
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
