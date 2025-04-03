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
const ArticleDescription = styled.p`
	text-align: justify;
	max-width: 450px;
	margin-bottom: 15px;
`;
export default function Header() {
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
					{/* @TODO: these articles can come from config file and also rendered in a loop instead of writing them one by one */}
					<ArticleDescription>
					👋 Hi! Im Peyman – a front-end developer specializing in React and Redux, with +2 years of experience in the web development world. Im passionate about learning, problem-solving, and creating great user experiences.
					</ArticleDescription>
					<ArticleDescription>
					🎯 My focus is on React, Redux, UI design, backend integration, and learning React Native.
					</ArticleDescription>
					<ArticleDescription>
					🔥 Im always looking for ways to improve and expand my skills in front-end and full-stack development!
					</ArticleDescription>

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
					{/* @TODO: these articles can come from config file and also rendered in a loop instead of writing them one by one */}
					<ArticleDescription>
						✅Passionate about clean UI, performance, and smooth user experiences.
					</ArticleDescription>
					<ArticleDescription>
					✅ I excel in problem-solving, backend integration, and teamwork.
					</ArticleDescription>
					<ArticleDescription>
					✅ I’m constantly learning and improving, staying up to date with the latest web technologies. If you're looking for a dedicated, adaptable, and growth-oriented developer, let’s build something great together!
					</ArticleDescription>

				</Article>
				
			</Container>
		</header>
	)
}
