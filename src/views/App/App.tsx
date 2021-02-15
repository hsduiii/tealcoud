import React from 'react';
import '../../styles/app.scss';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { searchWeatherAction } from '../../store/reducers/features/weather';
import { useForm } from 'react-hook-form';
import sunny from '../../assets/images/sunny.png';

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
				<Row className="w-100 justify-content-start">
					<Col xs={12} lg={3}>
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
					<Col xs={12} lg={9} className="mt-3">
						<Row className="justify-content-start align-items-center">
							<Col xs={12} lg={6}>
								<Card text="secondary">
									<Card.Img variant="top" src={sunny} />
									<Card.Body>
										<Card.Title>{weather?.name ? `${weather.name}, ${weather.sys?.country}` : 'W/I'}</Card.Title>
										<Card.Subtitle>
											{(weather?.weather) ? weather.weather[0].main : 'W/I'}
										</Card.Subtitle>
									</Card.Body>
								</Card>
							</Col>
							<Col xs={6}>
								<Card text="secondary">
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</Card.Text>
										<Button variant="primary">Go somewhere</Button>
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
