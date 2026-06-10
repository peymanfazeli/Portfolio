import React, { useState } from 'react'

export default function TextExpander({
	collapsedNumWords=20,
	epxandButtonText='show less',
	collapseButtonText='show more',
	buttonColor='#ff6622',
	buttonTextColor='white',
	className='',
	style={},
	newLineSymbol='',
	buttonInNewLine=true,
	children

}) {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const handleOnClick = () => {
		setIsCollapsed(!isCollapsed)
	}
	function setCollapsedText(text) {
		return text.split(' ').slice(0, collapsedNumWords).join(' ') + "..."
	}
	function displayText(text) {
		let finalText = text.replace(/\n/g, newLineSymbol);
		if (isCollapsed) {
			return setCollapsedText(finalText);
		}
		return finalText;
	}
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: `${buttonInNewLine ? 'column' : 'row'}`,
				// gap: '10px',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%',
			}}
		>
			<div className={className} style={style}>
				{displayText(children)}
				<button
					onClick={handleOnClick}
					style={{
						backgroundColor: buttonColor,
						color: buttonTextColor,
						padding: '5px 10px',
						border: 'none',
						borderRadius: '5px',
						cursor: 'pointer',
						marginLeft: buttonInNewLine ? '0' : '10px',
					}}
				>
					{isCollapsed ? collapseButtonText : epxandButtonText}
				</button>				
			</div>
		</div>

	)
}