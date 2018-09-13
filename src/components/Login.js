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
import axios from "axios";
import { Url } from "../constants/url";

export default class Login extends Component {
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
        const { email, password } = this.state;
        axios
            .post(`${Url}/login`, {
                email,
                password
            })
            .then(response => {
                const res = response.data;
                localStorage.setItem("token", res.token);
            })
            .catch(err => {
                console.log("Error in login: ", err.response);
            });
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
                                Login
                            </Button>
                            <Button
                                type="button"
                                color="secondary"
                                onClick={() => this.props.history.push("/register")}
                            >
                                Register
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
