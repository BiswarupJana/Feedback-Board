import React from 'react';
import './leftSection.css';

const FeedbackTypeBoard = () => {
	const [activeId, setActiveId] = React.useState('');
	const [types, setTypes] = React.useState([
		{
			name: 'All',
			id: 'All',
		},
		{
			name: 'UI',
			id: 'UI',
		},
		{
			name: 'UX',
			id: 'UX',
		},
		{
			name: 'Enhancement',
			id: 'Enhancement',
		},
		{
			name: 'Bug',
			id: 'Bug',
		},
		{
			name: 'Feature',
			id: 'Feature',
		},
	]);
	return (
		<div className='Button-container'>
			{types.map((type) => {
				return (
					<button
						key={type.id}
						className={
							type.id === activeId
								? 'type-button-active'
								: 'type-button'
						}
						onClick={() => {
							setActiveId(type.id);
						}}>
						{type.name}
					</button>
				);
			})}
		</div>
	);
};

export default FeedbackTypeBoard;
