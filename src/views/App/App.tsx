import React from 'react';
import '../../styles/app.scss';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { searchWeatherAction } from '../../store/reducers/features/weather';
import { useForm } from 'react-hook-form';
import getBackground from '../../utils/background';

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
											placeholder="Name..."
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
									<Card.Body>
										<Row>
											<Col xs={12}>
												<Card.Title>
													{weather?.name
														? `${weather.name}, ${weather.sys?.country}`
														: 'W/I'}
												</Card.Title>
												<Card.Subtitle>
													{weather?.weather ? weather.weather[0].main : 'W/I'}
												</Card.Subtitle>
											</Col>
											<Col className="mt-2">
												<Form.Row className="text-start">
													<Col xs={6} xl={4}>
														<Form.Group>
															<Form.Label>Temp</Form.Label>
															<Form.Control
																plaintext
																readOnly
																disabled
																type="text"
																value={
																	weather?.main
																		? `${weather.main.temp} °F`
																		: 'W/I'
																}
															/>
														</Form.Group>
													</Col>
													<Col xs={6} xl={4}>
														<Form.Group>
															<Form.Label>Feels Like</Form.Label>
															<Form.Control
																plaintext
																readOnly
																disabled
																type="text"
																value={
																	weather?.main
																		? `${weather.main.feels_like} °F`
																		: 'W/I'
																}
															/>
														</Form.Group>
													</Col>
													<Col xs={6} xl={4}>
														<Form.Group>
															<Form.Label>Min</Form.Label>
															<Form.Control
																plaintext
																readOnly
																disabled
																type="text"
																value={
																	weather?.main
																		? `${weather.main.temp_min} °F`
																		: 'W/I'
																}
															/>
														</Form.Group>
													</Col>
													<Col xs={6} xl={4}>
														<Form.Group>
															<Form.Label>Max</Form.Label>
															<Form.Control
																plaintext
																readOnly
																disabled
																type="text"
																value={
																	weather?.main
																		? `${weather.main.temp_max} °F`
																		: 'W/I'
																}
															/>
														</Form.Group>
													</Col>
													<Col xs={6} xl={4}>
														<Form.Group>
															<Form.Label>Wind</Form.Label>
															<Form.Control
																plaintext
																readOnly
																disabled
																type="text"
																value={
																	weather?.wind
																		? `${(weather.wind.speed / 0.44704).toFixed(
																				2
																		  )} mph`
																		: 'W/I'
																}
															/>
														</Form.Group>
													</Col>
													<Col xs={6} xl={4}>
														<Form.Group>
															<Form.Label>Humidity</Form.Label>
															<Form.Control
																plaintext
																readOnly
																disabled
																type="text"
																value={
																	weather?.main
																		? `${weather.main.humidity}%`
																		: 'W/I'
																}
															/>
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
				<Row className="w-100 justify-content-cente">
					<Col xs={12} className="text-center">
						<a href="https://github.com/hsduiii">@hsduiii</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
