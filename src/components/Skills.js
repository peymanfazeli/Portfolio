import React from 'react'

// configs
import config from '../config'
// components
import Card from './Card'



export default function Skills() {
	return (
		<div className='d-flex flex-column'>
			<h2 className="text-start my-5">Skills</h2>
			<div className="d-flex flex-wrap justify-content-center align-items-center">
				{config.skills.map((skill, index) => (
					<Card key={index} skillName={skill} />
				))}
			</div>
		</div>
	)
}
