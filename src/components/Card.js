import React from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3, FaReact, FaGithub,   } from "react-icons/fa";
import { IoLogoJavascript, } from "react-icons/io5";


// styles
const CardContainer = styled.div`
	width: 200px;
	height: 200px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5px;
	background: rgba(255, 255, 255, 0.22);
	border-radius: 16px;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(255, 255, 255, 0.3);
`

const getCardIcon = (skillName) => {
	switch (skillName) {
		case 'HTML':
			return <FaHtml5 size={80} className='text-warning'/>;
		case 'CSS':
			return <FaCss3 size={80} className='text-primary'/>;
		case 'JavaScript':
			return <IoLogoJavascript size={100} className='text-warning' />;
		case 'React':case 'React Native':
			return <FaReact size={80} className='text-primary'/>;
		case 'GitHub':
			return <FaGithub size={80} />;
		default:
			return null;
	}
}

export default function Card({skillName}) {
	return (
		<CardContainer>
			{getCardIcon(skillName)}
			{skillName}
		</CardContainer>
	)
}
