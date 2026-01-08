import React, { useCallback } from 'react'
import { motion } from "framer-motion";
import '../App.css';
import styled from 'styled-components'

// components
import Article from './Article'

// images
import profile from '../assets/profile.png'
import TextExpander from './TextExpander';
import config from '../config'


// style
const Container = styled.div `
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export default function Header() {
	const splitText = useCallback((text, seperator) => {
		console.log('seperator is', seperator)

	}, [])
	return (
		<header className="App-header">
			<Container
				className='d-flex flex-column flex-sm-row justify-content-center align-items-center'
			>
				<Article
					title='About me'
					content=''
					buttons={[
						// { text: 'View Projects', onClick: () => alert('View Projects clicked'), bgColor: 'red' },
						// { text: 'More about me?', onClick: () => alert('Contact Me clicked') },
					]}
				>
					<TextExpander
						style={{
							textAlign: 'justify',
							maxWidth: '450px',
							marginBottom:' 15px',
						}}
						buttonColor='transparent'
						buttonTextColor='cyan'
					>
						{config.bodySections.About.Text}
					</TextExpander>

				</Article>
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
					content=''
					buttons={[
						// { text: 'View Projects', onClick: () => alert('View Projects clicked'), bgColor: 'red' },
						// { text: 'Contact Me', onClick: () => alert('Contact Me clicked') },
					]}
				>
					<TextExpander
						style={{
							textAlign: 'justify',
							maxWidth: '450px',
							marginBottom:' 15px',
						}}
						buttonColor='transparent'
						buttonTextColor='cyan'
						newLineSymbol={'✅'}
					>
						{config.bodySections.hireMe.Text}
					</TextExpander>

				</Article>
				
			</Container>
		</header>
	)
}
