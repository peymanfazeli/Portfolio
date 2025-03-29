import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components'
import Article from './Article'

// images
import face from '../assets/face.png'

// style
const Container = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const ImgContainer = styled.div `
	position: relative;
`;
function HeaderMenu() {
	return (
		<>
		<div className="logo">My Portfolio</div>
		<nav>
			<ul style={{ display: 'flex', listStyle: 'none' }}>
				<li style={{ margin: '0 10px' }}>Home</li>
				<li style={{ margin: '0 10px' }}>About</li>
				<li style={{ margin: '0 10px' }}>Projects</li>
				<li style={{ margin: '0 10px' }}>Contact</li>
			</ul>
		</nav>
		</>
	)
}
export default function Header() {
	return (
		<Container>
			<Article
				title='Front-end Developer'
				content='I am a front-end developer with a passion for creating beautiful and functional user interfaces.'
				buttons={[
					{ text: 'View Projects', onClick: () => alert('View Projects clicked'), bgColor: 'red' },
					{ text: 'Contact Me', onClick: () => alert('Contact Me clicked') },
				]}
			/>
			{/* <ImgContainer>
				<img
					src={face}
					alt='Profile'
					style={{
						borderRadius: '50%',
						width: '150px',
						height: '300px',
						objectFit: 'contain',
						position: 'absolute',
					 }}
				/>
			</ImgContainer> */}
			{/* <img
					src={face}
					alt='Profile'
					style={{
						borderRadius: '50%',
						width: '300px',
						height: '300px',
						objectFit: 'contain',
						// position: 'absolute',
					 }}
				/> */}
			<section className="flex flex-col items-center text-center p-10 bg-gray-900 text-white rounded-2xl shadow-lg">
				<motion.img
					src={face}
					alt="Profile"

					style={{
						borderRadius: '50%',
						width: '300px',
						height: '300px',
						objectFit: 'contain',
					}}
					// initial={{ scale: 0 }}
					// animate={{ scale: 2 }}
					// transition={{ duration: 0.5 }}

					// whileHover={{ scale: 1.2 }}
					// transition={{ type: "spring", stiffness: 300 }}
					whileHover={{ rotate: 360 }}
					transition={{ type: 'spring', mass: 0.5 }}
					onClick={() => alert('Image clicked')}
				/>
			</section>
			<Article
				title='Front-end Developer'
				content='I am a front-end developer with a passion for creating beautiful and functional user interfaces.'
				buttons={[
					{ text: 'View Projects', onClick: () => alert('View Projects clicked'), bgColor: 'red' },
					{ text: 'Contact Me', onClick: () => alert('Contact Me clicked') },
				]}
			/>
			
		</Container>
	)
}
