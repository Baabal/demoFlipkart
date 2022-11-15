import React from 'react'
import "../styles/nav.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>

const NavbarF = () => {
    return (
        <Navbar className="nav" bg="light">
            <Nav>              
                <Nav.Link className="navlinks">Top Offers</Nav.Link>
                <Nav.Link className="navlinks">Grocery</Nav.Link>
                <Nav.Link className="navlinks">Mobiles</Nav.Link>
                <NavDropdown className="navlinks" title="Fashions">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="navlinks" title="Electronics">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className="navlinks" title="Home">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navlinks">Appliances</Nav.Link>
                <Nav.Link className="navlinks">Travel</Nav.Link>
                <NavDropdown className="navlinks" title="Beauty, Toys & More">
                    <NavDropdown.Item>Notification preference</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>24/7 customer support</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Advertise</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Download App</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navlinks">2-Wheelers</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarF
