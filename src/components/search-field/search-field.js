import React, {PropTypes} from 'react';
import FaSearch from 'react-icons/lib/fa/search';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

import './_search-field.scss';

// Set Component Name
class SearchField extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            searchTerm: ''
        };

        this.search = this.search.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    search() {
        const { searchAction } = this.props;
        const { searchTerm } = this.state;

        searchAction(searchTerm);
    }
    
    changeInput(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }

    render() {
        const { searchAction, placeholder } = this.props;
        const { searchTerm } = this.state;

        return (
            <FormGroup className="search-field">
                <InputGroup>
                    <FormControl
                        value={searchTerm}
                        onChange={this.changeInput}
                        placeholder={placeholder || 'Search...'}
                        type="text" />
                    <InputGroup.Button>
                        <Button onClick={this.search}><FaSearch /></Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        );
    }
}

// Set component propTypes
SearchField.propTypes = {
    searchAction: PropTypes.func,
    placeholder: PropTypes.string
};

export default SearchField;