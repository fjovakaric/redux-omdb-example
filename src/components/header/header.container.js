import React, { PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Spinner from '../spinner/spinner';

import './_header.scss'

class Header extends React.Component {
    render() {
        const { isLoading } = this.props;

        const spinner = isLoading ? (
            <Nav className="pull-right">
                <NavItem disabled>
                    <Spinner />
                </NavItem>
            </Nav>
        ) : '';

        return (
            <Navbar className="header">
                <Navbar.Brand>
                    <Link to="/">Redux OMDb Example</Link>
                </Navbar.Brand>
                <Nav>
                    <NavItem><Link to="/movies">Movies</Link></NavItem>
                </Nav>
                {spinner}
            </Navbar>
        );
    }
}

Header.protoTypes = {
    isLoading: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        isLoading: state.ajaxStatus > 0
    };
}

export default connect(
    mapStateToProps
)(Header);