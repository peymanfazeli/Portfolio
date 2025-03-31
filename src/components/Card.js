import React from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3, FaReact, FaGithub, FaBootstrap  } from "react-icons/fa";
import { IoLogoJavascript, } from "react-icons/io5";
import { SiRedux } from "react-icons/si";


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
const BluredBg = styled.div`
	position: absolute;
	inset: 0;
	background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 0.09) 90%);
	filter: blur(20px);
	z-index: -1;
`;

const getCardIcon = (skillName) => {
	switch (skillName) {
		case 'HTML':
			return <FaHtml5 size={80} className='text-warning'/>;
		case 'CSS':
			return <FaCss3 size={80} className='text-primary'/>;
		case 'Bootstrap':
			return <FaBootstrap size={80} color='violet'/>;
		case 'JavaScript':
			return <IoLogoJavascript size={100} className='text-warning' />;
		case 'React':case 'React Native':
			return <FaReact size={80} className='text-primary'/>;
		case 'Redux':
			return <SiRedux size={80}  color='violet'/>;
		case 'GitHub':
			return <FaGithub size={80}/>;
		default:
			return null;
	}
}

export default function Card({skillName}) {
	return (
		<CardContainer>
			<BluredBg />
			{getCardIcon(skillName)}
			{skillName}
		</CardContainer>
	)
}
