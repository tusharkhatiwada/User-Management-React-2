import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Users from "./Users";
import NewUser from "./NewUser";

export default class App extends Component {
    state = {
        isOpen: false
    };
    toggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen: !isOpen
        });
    };
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <Navbar dark color="primary" light expand="md">
                            <NavbarBrand>
                                <Link className="text-light" to="/">
                                    User Management
                                </Link>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to="/users/">
                                            Users
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to="/login">
                                            Login
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/users" component={Users} />
                    <Route path="/new-user" component={NewUser} />
                </div>
            </Router>
        );
    }
}
