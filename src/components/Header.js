import React from 'react'
import { motion } from "framer-motion";
import '../App.css';
import styled from 'styled-components'

// components
import Article from './Article'

// images
import profile from '../assets/profile.png'


// style
const Container = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export default function Header() {
	return (
		<header className="App-header">
			<Container
				className='d-flex flex-column flex-sm-row justify-content-center align-items-center'
			>
				<Article
					title='About me'
					content='I am a front-end developer with a passion for creating beautiful and functional user interfaces.'
					buttons={[
						{ text: 'View Projects', onClick: () => alert('View Projects clicked'), bgColor: 'red' },
						{ text: 'Contact Me', onClick: () => alert('Contact Me clicked') },
					]}
				/>
					<motion.img
						src={profile}
						alt="Profile"

						style={{
							borderRadius: '50%',
							width: '300px',
							height: '300px',
							objectFit: 'contain',
						}}
						whileHover={{ scale: 1.2 }}
						transition={{ type: "spring", bounce: 0.25 }}
						onClick={() => alert('Image clicked')}
					/>
				<Article
					title='Why should you hire me?'
					content='I am a front-end developer with a passion for creating beautiful and functional user interfaces.'
					buttons={[
						{ text: 'View Projects', onClick: () => alert('View Projects clicked'), bgColor: 'red' },
						{ text: 'Contact Me', onClick: () => alert('Contact Me clicked') },
					]}
				/>
				
			</Container>
		</header>
	)
}
