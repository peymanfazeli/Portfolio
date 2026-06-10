import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes} from 'styled-components';

import { FaTelegramPlane, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";
import config from '../config';

// components
// button
const Pulse = keyframes`
	0%{
	transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
`;
const Container = styled.div`
    width: 80px;
    height: 80px;
    padding: 10px;
    border: 2px solid #007BFF;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
	position: fixed;
	bottom: 20px;
	right: 10px;
	animation: ${Pulse} 1.5s ease-in-out infinite;
	background: rgba(132, 209, 254, 0.46);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	cursor: pointer;
	&:hover {
		background: rgba(187, 236, 249, 0.44);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}
`;
// Menu
const FadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const Menu = styled.div`
	position: fixed;
	bottom: 100px;
	right: 30px;
	background: rgba(132, 209, 254, 0.46);
	backdrop-filter: blur(8px);
	border-radius: 16px;
	box-shadow: 0 4px 12px rgba(0,0,0,0.2);
	padding: 12px 16px;
	display: flex;
	flex-direction: column;
	gap: 14px;
	z-index: 19;
	animation: ${FadeSlideIn} 0.3s ease forwards;

	@media (max-width: 640px) {
		right: 20px;
		bottom: 90px;
		padding: 10px 12px;
	}
`;
const IconLink = styled.a`
	color: #03a9f4;
	font-size: 20px;
	transition: 0.2s ease;
	display: flex;
	align-items: center;
	gap: 8px;
	text-decoration: none;

	&:hover {
		color:rgb(127, 201, 204);
		transform: scale(1.1);
	}

	// @media (max-width: 640px) {
	// 	font-size: 24px;
	// }
`;

export default function ContactMe({
	onClick,
	className,
	style
	}) {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	const setContactIcon = (name) => {
		switch (name) {
			case 'Telegram':
				return <FaTelegramPlane size={20} />;
			case 'Gmail':
				return <FaEnvelope size={20} />;
			case 'LinkedIn':
				return <FaLinkedin size={20} />;
			default:
				return null;
		}
	}
	return (
		<>
			<Container
				onClick={handleToggle}
				className={className}
			>
				<IoCallOutline size={30} className='text-info'/>
			</Container>
			
			{isOpen && (
				 <Menu>
					{config.ContactInfo.map((item, index) => {
						return (
							<IconLink
								href={`${item.link}`}
								target={`_${item.name !== 'Gmail' ? 'blank' : 'self'}`}
								rel={`${item.name !== 'Gmail' ? 'noopener noreferrer' : ''}`}
								onClick={() => setIsOpen(false)}
								key={index}
							>
								{setContactIcon(item.name)}
								{t(`contact.${item.name}`)}
							</IconLink>
						)
					})}

			   </Menu>
			)
			}
		</>
	)
}
