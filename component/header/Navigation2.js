import React, { Component } from "react";
import Link from "next/link";
import { Navbar, Container, FormControl, Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

class Navigation2 extends Component {
  render() {
    return (
      <Navbar
        bg="white"
        expand="lg"
      >
        <Container fluid>
          <Link href="/">
            <a>
              <img
                style={{
                  height: "35px",
                  marginLeft: "100px",
                  marginRight: "70px",
                }}
                src="/images/1.png"
              /></a>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Form className="d-flex">
              <FormControl
                style={{
                  width: "650px",
                  background: "#F5F5F5",
                  fontSize: "13px",
                  border: "none",
                }}
                type="search"
                placeholder="Search in Daraz"
                className=""
                aria-label="Search"
              />
              <Button
                style={{
                  background: "#F57224",
                  border: "none",
                  marginRight: "20px",
                  width: "45px",
                }}
              >
                <FaSearch />
              </Button>
              <Button
                style={{
                  border: "none",
                  background: "white",
                  color: "black",
                  fontSize: "x-large",
                }}
              >
                <BsCart2 />
              </Button>
              <img
                style={{
                  height: "35px",
                  marginRight: "80px",
                  marginLeft: "80px",
                  marginTop: "8px",
                }}
                src="/images/2.png"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation2;
