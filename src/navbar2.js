import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SecondNavbar() {
    return (
        <Navbar bg="light">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >              
                <Nav.Link>Top Offers</Nav.Link>
                <Nav.Link>Grocery</Nav.Link>
                <Nav.Link>Mobiles</Nav.Link>
                <NavDropdown title="Fashions">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Electronics">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Home">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Appliances</Nav.Link>
                <Nav.Link>Travel</Nav.Link>
                <NavDropdown title="Beauty, Toys & More">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>2-Wheelers</Nav.Link>

            </Nav>
        </Navbar>
    );
}


