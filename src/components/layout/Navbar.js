import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class NavbarHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
            
        };
         this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({isNavOpen: !this.state.isNavOpen});
    }
    render(){
        return(
           
                 <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand  href="/">
                            Admin Dashboard
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/">
                                    <span className="fa fa-home fa-lg"></span> Dashboard
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/addcategory">
                                    <span className="fa fa-sitemap fa-lg"></span> Add Categories
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/addchannel">
                                    <span className="fa fa-plus fa-lg"></span> Add Channels
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/pushnotification">
                                    <span className="fa fa-bell fa-lg"></span> Push Notification
                                </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className="nav-link" to="/settings">
                                    <span className="fa fa-gears fa-lg"></span> Settings
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                        <Nav className = "ml-auto" navbar>
                            <NavItem>
                            <Button outline >
                                <span className = "fa fa-sign-out fa-lg"></span> Logout
                            </Button>
                            </NavItem>
                        </Nav>
                    </div>
                    </Navbar>
           
      );
    }

}

export default NavbarHeader;