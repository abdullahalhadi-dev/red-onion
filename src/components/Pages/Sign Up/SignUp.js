import React from "react";
import './SignUp.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div className="signup">
        <Container>
            <Row>
                    <div className="signup-title">
                        <h2>Sign Up</h2>
                    </div>
                <div className="signup-wrapper">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Row>
        </Container>
    </div>
  );
};

export default SignUp;
