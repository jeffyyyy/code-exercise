import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { requestCarMakesData, requestCarDataByMakes } from '../../features/Car/actions';


class Search extends React.Component {
  componentDidMount() {
    this.props.dispatch(requestCarMakesData());
    this.props.dispatch(requestCarDataByMakes(10));
  }
  componentDidUpdate(prevProps) {
    
  }
  render() {
    return (
      <div>
        <h1>Search</h1>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  makes: state.car.makes,
  list: state.car.list,
  // peopleList: state.people.peopleList,
  // error: state.people.error
});

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Search);
