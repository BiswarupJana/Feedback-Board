/* eslint-disable react/prop-types */
// import React from 'react';
import FilledRightBody from './FilledRightBody';
import EmptyBody from './EmptyBody';

const suggestionData = [];

const RightSectionBody = () => {
	return (
		<div className='right-container'>
			{!suggestionData.length ? (
				<EmptyBody />
			) : (
				<FilledRightBody suggestionData={suggestionData} />
			)}
		</div>
	);
};

export default RightSectionBody;
