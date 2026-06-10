import React from 'react'
import Card from './Card'
const renderCard = (config, title) => {
    if (typeof config === 'object' && !Array.isArray(config)) {
        return Object.entries(config).map(([key, value]) => {
			return(
				<Card
					key={key}
					Item={value.name || key}
					type={title}
					img={value.img || ''}
					description={value.description}
					level={value.level || ''}
					link={value.link || ''}
					animationFromTop={'noAnimation'}
				>
					{title === 'Experiences' && value.date ? (
						<span style={{fontSize: '10px'}}>{value.date}</span>
					) : null}
				</Card>
			)
        });
    } else if (Array.isArray(config)) {
		return config.map((item, index) => <Card key={index} Item={item} type={title} animationFromTop={index%2 === 0} />)
    } else {
        return [];
    }
};

export default function Section({title, config, mainTitle}) {
	return (
		<div className='d-flex flex-column'>
			<h2 className="text-start my-5">{title}</h2>
			<div className={`d-flex flex-wrap  justify-content-start align-items-center`} style={{backfaceVisibility: 'hidden'}}>
				{renderCard(config, mainTitle)}	
			</div>
		</div>
	)
}
