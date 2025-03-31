import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaHome, FaMedium, FaLinkedin, FaGithub } from "react-icons/fa";

// menu configs
import config from '../config';


// styles
const MenuContainer = styled.ul`
	position: relative;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	gap: 10%;
	flex-wrap: wrap;
	width: 100%
;`;
const MenuItem = styled.li`
	list-style: none;
	margin: 0 10px;
	cursor: pointer;
`;
const MenuIcon = styled.span`
	display: flex;
`;

// handlers
const handleMenuIcon = (itemName) =>{
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
			break;
	}
}
export default function Menu({ theme, onThemeToggle }) {
	return (
		<MenuContainer>
			<button
				className="btn fixed-top-end"
				onClick={onThemeToggle}
			>
				{theme === "dark" ? "🌞" : "🌙"}
			</button>
			{config.menuItems && Object.entries(config.menuItems).map(([key, {name, URL}]) => (
				<MenuItem key={key} onClick={key.onClick}>
					<motion.div
						key={key}
						className="d-flex justify-content-center align-items-center"
						whileHover={{ scale: 1.2 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<MenuIcon>
							{handleMenuIcon(name)}
						</MenuIcon>
						<a
							href={`${URL}`}
							style={{textDecoration: 'none', color: 'inherit'}}
							target='_blank'
							rel='noopener noreferrer'
						>
							{name}
						</a>
					</motion.div>
				</MenuItem>
			)) }
		</MenuContainer>
	)
}
 