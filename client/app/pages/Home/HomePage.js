import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isNil } from 'ramda';
import { requestCarOfWeekData } from '../../features/Car/actions';
import CarDetailList from '../../components/CarDetailList';

class HomePage extends React.Component {
  componentDidMount() {
    const carOfWeekDetail = this.props.carofweek;
    if (isEmpty(carOfWeekDetail) || isNil(carOfWeekDetail)) {
      this.props.dispatch(requestCarOfWeekData());
    }
  }

  render() {
    const carOfWeekDetail = this.props.carofweek;
    if (isEmpty(carOfWeekDetail) || isNil(carOfWeekDetail)) {
      return null;
    }
    return (
      <div>
        <h1 className='text-center mb-4'>Car of the Week!</h1>
        <CarDetailList detail={carOfWeekDetail} />
      </div>
    );
  }
}

HomePage.defaultProps = {
  carofweek: {},
};

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  carofweek: PropTypes.object,
};

export default HomePage;
