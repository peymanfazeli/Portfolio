import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

// menu configs
import config from '../config';


// styles
const MenuContainer = styled.ul`
	position: relative;
	top: 0;
	color: white;
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
export default function Menu() {
	return (
		<MenuContainer>
			<motion.a
				whileHover={{ scale: 1.2 }}
				transition={{ type: "spring", stiffness: 300 }}
			/>
			{config.menuItems && Object.entries(config.menuItems).map(([key, {name, URL}]) => (
				<MenuItem key={key} onClick={key.onClick}>
					<motion.div
						key={key}
						className="d-flex justify-content-center align-items-center"
						whileHover={{ scale: 1.2 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<a
						href={`${URL}`}
						style={{textDecoration: 'none', color: 'white'}}
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
 