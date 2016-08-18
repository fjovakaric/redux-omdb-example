import React, {PropTypes} from 'react';
import FaSpinner from 'react-icons/lib/fa/spinner';
import {} from 'react-bootstrap';

import './_spinner.scss';

// Set Component Name
class Spinner extends React.Component {

    render() {
        const {} = this.props;

        return (
            <FaSpinner className="spinner" />
        );
    }
}

// Set component propTypes
Spinner.propTypes = {
    // props: PropTypes.object
};

export default Spinner;