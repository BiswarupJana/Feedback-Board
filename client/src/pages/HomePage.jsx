import React from 'react';
import './home.css';
import LeftSection from '../components/LeftSection';
import RightSection from '../components/RightSection';

const HomePage = () => {
	return (
		<div className='home-page'>
			<LeftSection />
			<RightSection />
		</div>
	);
};

export default HomePage;
