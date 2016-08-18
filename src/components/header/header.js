import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

import './_header.scss'

class Header extends React.Component {
    render() {
        return (
            <Navbar className="header">
                <Navbar.Brand>
                    <Link to="/">Redux OMDb Example</Link>
                </Navbar.Brand>
                <Nav>
                    <NavItem><Link to="/movies">Movies</Link></NavItem>
                </Nav>
            </Navbar>
        );
    }
}

Header.propTypes = {
};

export default Header;