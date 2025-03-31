import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	position: relative;
`;
const BluredBg = styled.div`
	position: absolute;
	inset: 0;
	background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 10%, rgba(0, 0, 0, 0.09) 90%);
	filter: blur(20px);
	z-index: -1;
`;
const ArticleTitle = styled.h3`
	margin-bottom: 15px;
`;
const ArticleDescription = styled.p`
	text-align: justify;
	max-width: 450px;
	margin-bottom: 15px;
`;
const ButtonContainer = styled.div`
	display: flex;
`;
const Button = styled.button`
	background: ${props =>  props.bgColor ? `linear-gradient(20deg, ${props.bgColor}, #007BFF)` : '#007BFF'};
	color: white;
	border: none;
	border-radius: 5px;
	padding: 5px 15px;
	margin-right: 15px;
	text-align: center;
	text-decoration: none;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

// Array of buttons
// buttons = [
// 	{ text: 'Read More', onClick: () => alert('Read More clicked'), bgColor: '#007BFF' },
// 	{ text: 'Share', onClick: () => alert('Share clicked') },
// ],
export default function Article({
    title = "My First Article",
    content = "This is the content of my first article. It is a simple example of how to create a styled component in React.",
    buttons = [],
}) {
  return (
    <ArticleContainer>
		<BluredBg />
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleDescription>{content}</ArticleDescription>
        {
            buttons ? (
				<ButtonContainer>
					{buttons.map((button, index) => (
						<Button
							key={index}
							onClick={button.onClick}
							bgColor={button.bgColor}
						>
							{button.text}
						</Button>
					))}
				</ButtonContainer>
			)
			: null
        }
    </ArticleContainer>
  )
}
