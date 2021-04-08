import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };     
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" tag="h1">
                            Gavin's Profile
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to ='/home'>
                                        <Button type="home" name="home" style={{marginRight:"5px"}}>Home</Button>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to ='/about'>
                                        <Button type="about" name="about" style={{marginRight:"5px"}}>About</Button>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to ='/experience'>
                                        <Button type="experience" name="experience" style={{marginRight:"5px"}}>Experience</Button>
                                    </NavLink>
                                </NavItem>   
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;