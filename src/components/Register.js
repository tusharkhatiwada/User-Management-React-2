import React, { Component } from "react";
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

export default class Register extends Component {
    state = {
        email: "",
        password: ""
    };
    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleLogin = event => {
        event.preventDefault();
        console.log(this.state.email, this.state.password);
    };
    render() {
        const { email, password } = this.state;
        return (
            <div style={{ size: "18rem" }}>
                <Card>
                    <CardBody>
                        <CardTitle>Login</CardTitle>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label>Username</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleInput}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleInput}
                                />
                            </FormGroup>
                            <Button type="submit" color="primary">
                                Register
                            </Button>
                            <Button
                                type="button"
                                color="secondary"
                                onClick={() => this.props.history.push("/login")}
                            >
                                Back to Login
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
