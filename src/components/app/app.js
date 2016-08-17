import React, {PropTypes} from 'react';

import Header from '../header/header';

import './_app.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;