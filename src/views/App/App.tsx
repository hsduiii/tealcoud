import React from "react";
import "../../styles/app.scss";
import { Col, Container, Row } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<Container
				fluid
				className="h-100 d-flex flex-column justify-content-center align-items-center"
			>
				<Row className="w-100 justify-content-center">
					<Col xs={12} className="text-center">
						TEALCLOUD
					</Col>
				</Row>
				<Container fluid className="footer d-flex flex-column justify-content-center align-items-center">
					<Row className="w-100 justify-content-cente">
						<Col xs={12} className="text-center">
							<a href="https://github.com/hsduiii">@hsduiii</a>
						</Col>
					</Row>
				</Container>
			</Container>
		</div>
	);
}

export default App;
