import { useState } from "react"
import React from "react"
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"
import Axios from "axios"


// import classes from "../../../css/navbar.module.css"

// class Avatar extends React.Component {

// }



function Header({user}){

    const logout = () => {
        Axios.get(`http://localhost:5000/logout`, {withCredentials: true}).then((response) => {
          console.log(response.data)
          if (response.data.status === "ok"){
            alert("Logout was successful");
          }
        });
    }



    return(
        <header>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Blog App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        </Nav>
                        <Nav>
                            <Nav.Link href="/collections">Browse Collections</Nav.Link>
                            {user.id ? 
                                <>
                                    <li>
                                        <NavDropdown title={user.username} id="collasible-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Following</NavDropdown.Item>
                                            <NavDropdown.Item href={`/profile/${user.id}`}>Profile</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item onClick={logout} href="/">Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                </>
                                : 
                                <>
                                    <Nav.Link href="/login" >Login</Nav.Link>
                                    <Nav.Link href="/register">Sign Up</Nav.Link>
                                </>
                            }
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header