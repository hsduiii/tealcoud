import clear from '../assets/images/clear.png';
import main from '../assets/images/main.png';
import clouds from '../assets/images/clouds.png';
import haze from '../assets/images/haze.jpg';
import rainy from '../assets/images/rainy.png';
import snowy from '../assets/images/snowy.png';
import mist from '../assets/images/mist.jpg';

const getBackground = (type: string): string => {
	switch (type) {
		case 'clear':
			return clear;
		case 'clouds':
			return clouds;
		case 'haze':
			return haze;
		case 'rainy':
			return rainy;
		case 'snowy':
			return snowy;
		case 'mist':
			return mist;
		default:
			return main;
	}
};

export default getBackground;
