import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaHome, FaMedium, FaLinkedin, FaGithub } from "react-icons/fa";

// menu configs
import config from '../config';

// imgs
import logo from '../assets/logo.png';

// styles
const MenuContainer = styled.ul`
	position: relative;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 100%;
	flex-direction: column;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const MenuItem = styled.li`
	list-style: none;
	margin: 10px;
	cursor: pointer;
`;

const MenuIcon = styled.span`
	display: flex;
`;

// handlers
const handleMenuIcon = (itemName) => {
	switch (itemName) {
		case 'Home':
			return <FaHome size={20} />;
		case 'GitHub':
			return <FaGithub size={20} />;
		case 'LinkedIn':
			return <FaLinkedin size={20} />;
		case 'Medium':
			return <FaMedium size={20} />;
		default:
			return null;
	}
};

export default function Menu({ theme, onThemeToggle }) {
	const [hamburgurOpen, setHamburgurOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-md">
			<div className="container">
				<img
					src={logo}
					alt='logo'
					style={{
						width: '100px',
						height: '100px',
						objectFit: 'contain',
						filter: `invert(${theme === "dark" ? '1' : '0'})`
					}}
				/>

				{/* Hamburger button*/}
				<button
					className="navbar-toggler"
					type="button"
					onClick={() => setHamburgurOpen(prev => !prev)}
					style={{ borderColor: 'white' }}
				>
					<span
						className="navbar-toggler-icon"
						style={{ filter: 'invert(1)' }}
					></span>
				</button>

				{/* menue */}
				<div className={`collapse navbar-collapse ${hamburgurOpen ? 'show' : ''}`}>
					<MenuContainer className="navbar-nav">
						<button className="btn fixed-top-end" onClick={onThemeToggle}>
							{theme === "dark" ? "🌞" : "🌙"}
						</button>
						{config.menuItems &&
							Object.entries(config.menuItems).map(([key, { name, URL }]) => (
								<MenuItem key={key} className="nav-item">
									<motion.div
										className="d-flex justify-content-center align-items-center"
										whileHover={{ scale: 1.2 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										<MenuIcon>{handleMenuIcon(name)}</MenuIcon>
										<a
											href={URL}
											style={{ textDecoration: 'none', color: 'inherit' }}
											target="_blank"
											rel="noopener noreferrer"
										>
											{name}
										</a>
									</motion.div>
								</MenuItem>
							))}
					</MenuContainer>
				</div>
			</div>
		</nav>
	);
}
