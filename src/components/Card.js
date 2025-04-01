import React from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGit  } from "react-icons/fa";
import { IoLogoJavascript, } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

// imgs
import bzbz from '../assets/BazamBazi.png'
// styles
const CardContainer = styled.div`
	width: 100px;
	height: 100px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5px;
	background: ${props => props.type !== 'Experiences' && 'rgba(255, 255, 255, 0.22)'};
	border-radius: 16px;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: ${props => props.type !== 'Experiences' && '1px solid rgba(255, 255, 255, 0.3)'};
`
const BluredBg = styled.div`
	position: absolute;
	inset: 0;
	background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 0.09) 90%);
	filter: blur(20px);
	z-index: -1;
`;

const CompanyLogos = styled.img `
	width: 100px;
	height: 100px;
	object-fit: contain;
`;

const getCardIcon = (ItemName, type) => {
	if (type === 'Skills') {
		switch (ItemName) {
			case 'HTML':
				return <FaHtml5 size={50} className='text-warning'/>;
			case 'CSS':
				return <FaCss3 size={50} className='text-primary'/>;
			case 'Bootstrap':
				return <FaBootstrap size={50} color='violet'/>;
			case 'JavaScript':
				return <IoLogoJavascript size={50} className='text-warning' />;
			case 'React':case 'React Native':
				return <FaReact size={50} className='text-primary'/>;
			case 'Redux':
				return <SiRedux size={50}  color='violet'/>;
			case 'Git':
				return <FaGit size={50}/>;
			default:
				return null;
		}
	} else {
		switch (ItemName) {
			case 'BazamBazi':
				return <CompanyLogos src={bzbz} alt={ItemName} />
			default:
				return null;
		}
	}
	
}

export default function Card({Item, type}) {
	return (
		<CardContainer type={type}>
			{type !== 'Experiences' && <BluredBg />}
			{getCardIcon(Item, type)}
			{Item}
		</CardContainer>
	)
}
