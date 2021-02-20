import React, { useEffect } from 'react';
import '../../styles/app.scss';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
	searchWeatherAction,
	searchWeatherCoordinatesAction
} from '../../store/reducers/features/weather';
import { useForm } from 'react-hook-form';
import WeatherCard from '../../components/weather-card';
import Footer from '../../components/footer';

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

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				console.log('Latitude is :', position.coords.latitude);
				console.log('Longitude is :', position.coords.longitude);

				dispatch(
					searchWeatherCoordinatesAction(
						position.coords.latitude,
						position.coords.longitude
					)
				);
			});
		} else {
			console.log('Not Available');
		}
	}, [dispatch]);

	const onSubmit = ({ location }: IFormData) => {
		dispatch(searchWeatherAction(location));
	};

	return (
		<div className="App">
			<Container
				fluid
				className="app-body d-flex flex-column justify-content-center align-items-center mt-4"
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
								<WeatherCard weather={weather} />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
