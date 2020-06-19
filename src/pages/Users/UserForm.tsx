import React, { useState } from "react";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	CardFooter,
} from "reactstrap";
import { User } from "../../store/user/types";
import styled from "styled-components";

const CardProfileImage = styled.div`
	max-width: 90px;

	img {
		max-width: 90px;
	}
`;

interface Props {
	user: User;
}
const UserForm = React.memo(({ user }: Props) => {
    
    
    const [password, setPassword] = useState();
    
    

	return (
		<Card className="shadow">
			<Row className="justify-content-center">
				<Col className="order-lg-2" lg="2">
					<CardProfileImage className="card-profile-image">
						<a href="#pablo" onClick={(e) => e.preventDefault()}>
							<img
								alt="..."
								className="rounded-circle"
								src={user.photoURL}
							/>
						</a>
					</CardProfileImage>
				</Col>
			</Row>
			<CardHeader />
			<CardBody>
				<Form>
					<h3>
						{user.displayName}
						<span className="font-weight-light"></span>
					</h3>
					<div className="h4">
						ID: <span className="font-weight-light">{user.id}</span>
					</div>
					<Row>
						<Col lg="6">
							<FormGroup>
								<label
									className="form-control-label"
									htmlFor="input-username"
								>
									Email / UserName
								</label>
								<Input
									className="form-control-alternative"
									id="input-username"
									placeholder="test@true.net"
                                    type="text"
                                    value={user.email as string}
								/>
							</FormGroup>
						</Col>
						<Col lg="6">
							<FormGroup>
								<label
									className="form-control-label"
									htmlFor="input-email"
								>
									Password
								</label>
								<Input
									className="form-control-alternative"
									id="input-email"
									placeholder="jesse@example.com"
									defaultValue="******"
									type="password"
								/>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</CardBody>
			<CardFooter className="py-4"></CardFooter>
		</Card>
	);
});

export default UserForm;
