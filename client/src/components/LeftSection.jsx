import NavbarBoard from './NavbarBoard';
import FeedbackTypeBoard from './FeedbackTypeBoard';
import RoadMapBox from './RoadMapBox';

const LeftSection = () => {
	return (
		<div className='left-section'>
			<NavbarBoard />
			<FeedbackTypeBoard />
			<RoadMapBox />
		</div>
	);
};

export default LeftSection;
