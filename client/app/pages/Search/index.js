import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import { requestMakesData, requestModelData } from '../../features/Car/actions';
import { navigateToPage } from '../../util/helper';

const SearchButton = styled(props => <Button {...props} />).attrs({
  className: 'pl-5 pr-5'
})`
  border-radius: 32px;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCarMake: '',
      selectedCarModel: '',
    };
  }
  componentDidMount() {
    this.props.dispatch(requestMakesData());
  }
  handleCarMakesChange = (selectedOption) => {
    if (selectedOption !== this.state.selectedCarMake) {
      this.setState({ selectedCarMake: selectedOption, selectedCarModel: '' });
      this.props.dispatch(requestModelData(selectedOption.makeId));
    }
  };
  handleCarModelsChange = (selectedOption) => {
    if (selectedOption !== this.state.selectedCarModel) {
      this.setState({ selectedCarModel: selectedOption });
    }
  };
  searchCar = () => {
    const id = this.state.selectedCarModel.id;
    navigateToPage(`/make/model/${id}`)();
  };
  render() {
    const { selectedCarMake, selectedCarModel } = this.state;
    const { makes, models } = this.props;
    return (
      <div>
        <h1 className='mb-4'>Search for your favourite Car!</h1>
        <Row className='mt-4'>
          <Col sm={12} md={6}>
            <Select
              className='mt-3'
              value={selectedCarMake}
              onChange={this.handleCarMakesChange}
              options={makes}
              getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
            />
          </Col>
          <Col sm={12} md={6}>
            <Select
              className='mt-3'
              value={selectedCarModel}
              onChange={this.handleCarModelsChange}
              options={models}
              getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
            />
          </Col>
          <Col sm={12} md={12} className='mt-5 mb-5 text-center'>
            <SearchButton
              color="primary"
              onClick={this.searchCar}
              disabled={!selectedCarMake || !selectedCarModel}
            >
              Search
            </SearchButton>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  makes: state.car.makes,
  models: state.car.models,
});

Search.defaultProps = {
  makes: [],
  models: [],
};

Search.propTypes = {
  dispatch: PropTypes.func.isRequired,
  makes: PropTypes.array,
  models: PropTypes.array,
};

export default connect(mapStateToProps)(Search);
