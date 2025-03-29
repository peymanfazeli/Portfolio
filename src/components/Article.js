import React from 'react';
import styled from 'styled-components';

const ArticleContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;
const ArticleTitle = styled.h1`
	font-size: 2em;
	margin-bottom: 20px;
`;
const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Button = styled.button`
	background-color: ${props => props.bgColor || '#007BFF'};
	color: white;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	margin-right: 5px;
	text-align: center;
	text-decoration: none;
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
        <ArticleTitle>{title}</ArticleTitle>
        <p>{content}</p>
        {
            buttons ? (
				<ButtonContainer>
					{buttons.map((button, index) => (
						<Button key={index} onClick={button.onClick} bgColor={button.bgColor}>
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
