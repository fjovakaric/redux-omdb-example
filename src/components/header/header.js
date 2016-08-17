import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

import './_header.scss'

class Header extends React.Component {
    render() {
        return (
            <Navbar className="header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Redux OMDb Example</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem><Link to="/movies">Movies</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Header.propTypes = {
};

export default Header;