import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RiGithubLine } from 'react-icons/ri';

const Footer: React.FC = (): JSX.Element => (
	<Container
		fluid
        className="footer"
	>
		<Row className="w-100 justify-content-center mt-2">
			<Col xs={12} className="text-center">
				<a href="https://github.com/hsduiii" target="_blank">
					{<RiGithubLine />} hsduiii
				</a>
			</Col>
		</Row>
	</Container>
);

export default Footer;
