import React from 'react'
import Card from './Card'
const setConfigArray = (config) => {
	console.log('config is', config);
    if (typeof config === 'object' && !Array.isArray(config)) {
        return Object.entries(config).map(([key, value]) => {
            // return { key, value };
			return key
        });
    } else if (Array.isArray(config)) {
        // return config.map((item, index) => ({ key: index, value: item }));
		return config
    } else {
        return [];
    }
};

export default function Section({title, config}) {
	const conf = setConfigArray(config);
	return (
		<div className='d-flex flex-column'>
			<h2 className="text-start my-5">{title}</h2>
			<div className={`d-flex flex-wrap  justify-content-start align-items-center`}>
				{conf.map((configItem, index) => (
					<Card key={index} Item={configItem} type={title} />
				))}
			</div>
		</div>
	)
}
