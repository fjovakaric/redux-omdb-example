import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {} from 'react-bootstrap';

//import * as actions from '../../redux/actions';

import './_movie.scss'

// Set container name
class MoviePage extends React.Component {
    render() {
        const {} = this.props;

        return (
            <div className="movie-page">
                <h1>Movie Page</h1>
            </div>
        );
    }
}

// Set PropTypes
MoviePage.propTypes = {
    // props: PropTypes.object,
    // actions: PropTypes.object
};

// Set props
function mapStateToProps(state, ownProps) {
    return {
        // prop: state.prop
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviePage);