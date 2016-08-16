import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';

import './_home.scss'

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>This is a reactjs-redux example app using omdb API</p>
                </Jumbotron>
            </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;