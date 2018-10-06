import React from 'react';
import propTypes from 'prop-types';
import Select from 'react-select';

class SelectComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: null,
    };
  }
  componentDidMount() {
    this.props.loadOptions();
  }
  componentDidUpdate(prevProps, prevState) {

  }
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption, options } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

SelectComponent.propTypes = {
  loadOptions: propTypes.func.isRequired,

};
