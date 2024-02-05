import './rightSection.css';
import NabBarSuggestion from './NabBarSuggestion';
import RightSectionBody from './RightSectionBody';

const RightSection = () => {
	return (
		<div style={{ width: '70%' }}>
			<NabBarSuggestion />
			<RightSectionBody />
		</div>
	);
};

export default RightSection;
