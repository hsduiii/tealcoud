import clear from '../assets/images/clear.png';
import main from '../assets/images/main.png';
import clouds from '../assets/images/clouds.png';
import haze from '../assets/images/haze.jpg';
import rain from '../assets/images/rain.png';
import snow from '../assets/images/snow.png';
import mist from '../assets/images/mist.jpg';

const getBackground = (type: string): string => {
	switch (type) {
		case 'clear':
			return clear;
		case 'clouds':
			return clouds;
		case 'haze':
			return haze;
		case 'rain':
			return rain;
		case 'snow':
			return snow;
		case 'mist':
			return mist;
		default:
			return main;
	}
};

export default getBackground;
