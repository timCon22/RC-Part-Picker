import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap"
import "./NavBar.css"

const NavBar = () => {

    return (
        <div>
            <Navbar expand="md">
                    <NavLink exact to="/" className="navbar-brand">
                        <h1>RC-Part-Picker</h1>
                    </NavLink>
                <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/traxxas/all">All Models</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/traxxas/parts">Search</NavLink>
                        </NavItem>
                </Nav>
        </Navbar>
        </div>
    )
}

export default NavBar