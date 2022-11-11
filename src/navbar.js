import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function FirstNavbar() {
    return (
        <Navbar bg="light">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Navbar.Brand>Flipkart Explore Plus+</Navbar.Brand>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search for porducts, brands and more"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav.Link>Login</Nav.Link>
                <Nav.Link>Become a seller</Nav.Link>
                <NavDropdown title="More">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Cart</Nav.Link>
            </Nav>
        </Navbar>
    );
}


