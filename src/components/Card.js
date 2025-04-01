import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from "framer-motion";
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

const riseAnimation = (percent) => keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: ${percent}%;
  }
`;
const FillLevel = styled.div`
	position: absolute;
	border-radius: 16px;
	width: 100%;
	height: ${props => props.percent}%;
	background: linear-gradient(0deg, #007BFF 30%, #fff 100%);
	z-index: 0;
	bottom: 0;
	animation: ${(props) => (props.animate ? riseAnimation(props.percent) : "none")} 1.5s ease-out;
`;

const CardTitle = styled.span`
	z-index: 1;
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
				// return <CompanyLogos src={bzbz} alt={ItemName} />
				return <motion.img
							src={bzbz}
							alt="Profile"
	
							style={{
								width: '100px',
								height: '100px',
								objectFit: 'contain',
							}}
							whileHover={{ rotate: 360}}
							transition={{ type: "spring", mass: 3.5 }}
						/>
			default:
				return null;
		}
	}
	
}

export default function Card({
	Item,
	type,
	img='',
	description='',
	level='',
	date='',
}) {
	const [isVisible, setIsVisible] = useState(false);
	const fillRef = useRef(null);

	useEffect(() => {
		const element = fillRef.current; // Store the current reference
	  
		if (!element) return;
	  
		const observer = new IntersectionObserver(
		  ([entry]) => {
			if (entry.isIntersecting) {
			  setIsVisible(true);
			}
		  },
		  { threshold: 0.5 }
		);
	  
		observer.observe(element);
	  
		return () => {
		  if (element) {
			observer.unobserve(element);
		  }
		};
	  }, []);
	return (
		<CardContainer type={type} >
			{type !== 'Experiences' && <BluredBg />}
			{type === 'Languages' && <FillLevel ref={fillRef} percent={level} animate={isVisible} />}
			{getCardIcon(Item, type)}
			<CardTitle>{Item}</CardTitle>
		</CardContainer>
	)
}
