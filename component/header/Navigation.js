import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

class Navigation extends Component {
    render() {
        return (
            <Navbar
            collapseOnSelect
            expand="lg"
            style={{ background: "#ECECEC", height: "30px" }}
            >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: "200px" }}>
                            <Link
                                href="/App"
                               
                            >
                                <a className="nav-link active"
                                    style={{
                                        fontSize: "12px",
                                        marginRight: "21px",
                                        color: "#FF5300",
                                    }}>SAVE MORE ON APP</a>
                            </Link>
                            <Link
                                href="/SellerLogin"
                                
                            >
                                <a className="nav-link active"
                                    style={{
                                        fontSize: "12px",
                                        marginRight: "21px",
                                       
                                    }}>SELL ON DARAZ</a>
                            </Link>
                            <Link
                                href="/CustomerCare"
                               >
                                <a className="nav-link active"
                                    style={{
                                        fontSize: "12px",
                                        marginRight: "21px",
                                       
                                    }}>CUSTOMER CARE</a>
                            </Link>
                            <Link
                                href="/TrackOrder"
                            >
                                <a className="nav-link active"
                                    style={{
                                        fontSize: "12px",
                                        marginRight: "21px",
                                       
                                    }}>TRACK MY ORDER</a>
                            </Link>
                            <Link
                                href="/Login"
                            >
                                <a className="nav-link active"
                                    style={{
                                        fontSize: "12px",
                                        marginRight: "21px",
                                       
                                    }}>SIGNUP / LOGIN</a>
                            </Link>
                            <Link
                                href="/Affiliated"
                            >
                                <a className="nav-link active"
                                    style={{
                                        fontSize: "12px",
                                        marginRight: "21px",
                                       
                                    }}>DARAZ AFFILIATED PROGRAM</a>
                            </Link>
                            <Link
                                href="/"
                            >
                                <a className="nav-link active"
                                    style={{
                                        fontSize: "12px",
                                        marginRight: "21px",
                                       
                                    }}>
                                ভাষা</a>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;
