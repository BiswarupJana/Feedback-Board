/* eslint-disable react/prop-types */
import React from 'react';
import upArrow from './images/icon-arrow-up.svg';
import commentImg from './images/icon-comments.svg';

const FilledRightBody = ({ suggestionData }) => {
	return (
		<div className='right-filled-body'>
			{suggestionData.map((suggestion) => {
				return (
					<div className='suggestion-box' key={suggestion.id}>
						<div className='left-body-section'>
							<div className='likesUpdate'>
								<img src={upArrow} alt='up-arrow' />
								{suggestion.likes}
							</div>
							<div className='middle-section'>
								<h3>{suggestion.title}</h3>
								<p>{suggestion.details}</p>
								<div className='category-type'>
									{suggestion.category}
								</div>
							</div>
						</div>
						<div className='right-body-section'>
							<img
								src={commentImg}
								alt='comment-img'
								width='1rem'
							/>
							<p>{suggestion.comments.length}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default FilledRightBody;
