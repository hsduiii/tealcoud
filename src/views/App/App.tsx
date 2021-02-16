import React from 'react';
import '../../styles/app.scss';
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	InputGroup,
	Row
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { searchWeatherAction } from '../../store/reducers/features/weather';
import { useForm } from 'react-hook-form';
import getBackground from '../../utils/background';
import moment from 'moment';
import {
	WiDirectionDown,
	WiDirectionUp,
	WiRaindrop,
	WiStrongWind,
	WiThermometer,
	WiThermometerExterior
} from 'react-icons/wi';
import { RiGithubLine } from 'react-icons/ri';

interface IFormData {
	location: string;
}

function App() {
	const { register, handleSubmit, formState } = useForm<IFormData>({
		mode: 'onChange'
	});
	const { isValid } = formState;
	const { weather, isLoading } = useSelector(
		(state: RootState) => state.app.weather
	);
	const dispatch = useDispatch();

	const onSubmit = ({ location }: IFormData) => {
		dispatch(searchWeatherAction(location));
	};

	return (
		<div className="App">
			<Container
				fluid
				className="d-flex flex-column justify-content-center align-items-center mt-4"
			>
				<Row className="w-100 justify-content-center">
					<Col xs={12} xl={3}>
						<Row>
							<Col xs={12} className="text-start title">
								TEALCLOUD
							</Col>
							<Col>
								<Form onSubmit={handleSubmit(onSubmit)} className="mt-3">
									<Form.Group>
										<Form.Label>City</Form.Label>
										<Form.Control
											name="location"
											type="text"
											size="lg"
											placeholder="E.g. Monterrey / Monterrey, MX"
											ref={register({ required: true })}
										/>
									</Form.Group>
									<Container
										fluid
										className="d-flex justify-content-end align-items-center p-0"
									>
										<Button
											className="w-100"
											variant="outline-primary"
											type="submit"
											size="lg"
											disabled={!isValid}
										>
											{isLoading ? 'Loading…' : 'Search'}
										</Button>
									</Container>
								</Form>
							</Col>
						</Row>
					</Col>
					<Col xs={12} xl={7} className="mt-4 mt-xl-2">
						<Row className="justify-content-center align-items-center">
							<Col xs={12} xl={10}>
								<Card text="secondary">
									<Card.Img
										variant="top"
										src={getBackground(
											weather?.weather
												? weather.weather[0].main.toLowerCase()
												: ''
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
																		weather?.main
																			? `${weather.main.temp} °C`
																			: 'N / A'
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
																	<InputGroup.Text>
																		{<WiThermometer />}
																	</InputGroup.Text>
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
																	<InputGroup.Text>
																		{<WiDirectionDown />}
																	</InputGroup.Text>
																</InputGroup.Prepend>
																<Form.Control
																	plaintext
																	readOnly
																	disabled
																	type="text"
																	value={
																		weather?.main
																			? `${weather.main.temp_min} °C`
																			: 'N / A'
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
																	<InputGroup.Text>
																		{<WiDirectionUp />}
																	</InputGroup.Text>
																</InputGroup.Prepend>
																<Form.Control
																	plaintext
																	readOnly
																	disabled
																	type="text"
																	value={
																		weather?.main
																			? `${weather.main.temp_max} °C`
																			: 'N / A'
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
																	<InputGroup.Text>
																		{<WiStrongWind />}
																	</InputGroup.Text>
																</InputGroup.Prepend>
																<Form.Control
																	plaintext
																	readOnly
																	disabled
																	type="text"
																	value={
																		weather?.wind
																			? `${(
																					weather.wind.speed / 0.44704
																			  ).toFixed(2)} mph`
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
																	<InputGroup.Text>
																		{<WiRaindrop />}
																	</InputGroup.Text>
																</InputGroup.Prepend>
																<Form.Control
																	plaintext
																	readOnly
																	disabled
																	type="text"
																	value={
																		weather?.main
																			? `${weather.main.humidity}%`
																			: 'N / A'
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
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<Container
				fluid
				className="footer d-flex flex-column justify-content-center align-items-center"
			>
				<Row className="w-100 justify-content-center mt-2">
					<Col xs={12} className="text-center">
						<a href="https://github.com/hsduiii/tealcoud" target="_blank">
							{<RiGithubLine />} hsduiii
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
