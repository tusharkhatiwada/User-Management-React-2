import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

import { Url } from "../constants/url";

export default class Users extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = () => {
        axios
            .get(`${Url}/users`)
            .then(response => {
                const res = response.data;
                this.setState({
                    users: res.data
                });
            })
            .catch(err => {
                console.log("Error getting users: ", err.response);
            });
    };
    handleDelete = id => {
        axios
            .delete(`${Url}/users/${id}`)
            .then(response => {
                const res = response.data;
                this.fetchUsers();
                console.log(res);
            })
            .catch(err => {
                console.log("Error deleting user: ", err.response);
            });
    };
    renderUserTable = () => {
        const { users } = this.state;
        return users.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                        <img src={user.avatar} alt="" className="rounded" />
                    </td>
                    <td>{`${user.first_name} ${user.last_name}`}</td>
                    <td>
                        <Button tag={Link} color="primary" to={`/user/${user.id}`}>
                            Show
                        </Button>{" "}
                        <Button color="success">Edit</Button>{" "}
                        <Button color="danger" onClick={() => this.handleDelete(user.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Table>
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Avatar</th>
                                    <th>Full name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>{this.renderUserTable()}</tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
