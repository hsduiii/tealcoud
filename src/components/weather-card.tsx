import moment from 'moment';
import React from 'react';
import { Card, Row, Col, Form, InputGroup } from 'react-bootstrap';
import {
	WiThermometerExterior,
	WiThermometer,
	WiDirectionDown,
	WiDirectionUp,
	WiStrongWind,
	WiRaindrop
} from 'react-icons/wi';
import IWeatherModel from '../models/weather';
import getBackground from '../utils/background';

interface IWeatherCardProps {
	weather?: IWeatherModel;
}

const WeatherCard: React.FC<IWeatherCardProps> = (props): JSX.Element => {
	const { weather } = props;

	return (
		<Card text="secondary">
			<Card.Img
				variant="top"
				src={getBackground(
					weather?.weather ? weather.weather[0].main.toLowerCase() : ''
				)}
			/>
			<Card.ImgOverlay className="text-right">
				<Card.Title className="day">
					{weather?.main ? moment().format('dddd DD') : ''}
				</Card.Title>
				<Card.Subtitle className="month-year">
					{weather?.main ? moment().format('MMMM-YYYY') : ''}
				</Card.Subtitle>
			</Card.ImgOverlay>
			<Card.Body>
				<Row>
					<Col xs={12}>
						<Card.Title>
							{weather?.name
								? `${weather.name}, ${weather.sys?.country}`
								: 'N / A'}
						</Card.Title>
						<Card.Subtitle>
							{weather?.weather ? weather.weather[0].main : 'N / A'}
						</Card.Subtitle>
					</Col>
					<Col className="mt-2">
						<Form.Row className="text-start">
							<Col xs={6} xl={4}>
								<Form.Group>
									<Form.Label>Temp</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>
												{<WiThermometerExterior />}
											</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											plaintext
											readOnly
											disabled
											type="text"
											value={
												weather?.main ? `${weather.main.temp} °C` : 'N / A'
											}
										/>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col xs={6} xl={4}>
								<Form.Group>
									<Form.Label>Feels Like</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>{<WiThermometer />}</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											plaintext
											readOnly
											disabled
											type="text"
											value={
												weather?.main
													? `${weather.main.feels_like} °C`
													: 'N / A'
											}
										/>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col xs={6} xl={4}>
								<Form.Group>
									<Form.Label>Min</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>{<WiDirectionDown />}</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											plaintext
											readOnly
											disabled
											type="text"
											value={
												weather?.main ? `${weather.main.temp_min} °C` : 'N / A'
											}
										/>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col xs={6} xl={4}>
								<Form.Group>
									<Form.Label>Max</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>{<WiDirectionUp />}</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											plaintext
											readOnly
											disabled
											type="text"
											value={
												weather?.main ? `${weather.main.temp_max} °C` : 'N / A'
											}
										/>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col xs={6} xl={4}>
								<Form.Group>
									<Form.Label>Wind</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>{<WiStrongWind />}</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											plaintext
											readOnly
											disabled
											type="text"
											value={
												weather?.wind
													? `${(weather.wind.speed / 0.44704).toFixed(2)} mph`
													: 'N / A'
											}
										/>
									</InputGroup>
								</Form.Group>
							</Col>
							<Col xs={6} xl={4}>
								<Form.Group>
									<Form.Label>Humidity</Form.Label>
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>{<WiRaindrop />}</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											plaintext
											readOnly
											disabled
											type="text"
											value={
												weather?.main ? `${weather.main.humidity}%` : 'N / A'
											}
										/>
									</InputGroup>
								</Form.Group>
							</Col>
						</Form.Row>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default WeatherCard;
