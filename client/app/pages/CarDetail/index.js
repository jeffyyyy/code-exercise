import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { isEmpty, isNil } from 'ramda';
import { requestCarDetailData } from '../../features/Car/actions';
import CarDetailList from '../../components/CarDetailList';

class CarDetail extends React.Component {
  componentDidMount() {
    this.props.dispatch(requestCarDetailData({ modelId: this.props.match.params.id }));
  }
  render() {
    const { detail } = this.props;
    if (isEmpty(detail) || isNil(detail)) {
      return null;
    }
    return (
      <div className='mb-5'>
        <h1 className='text-center mb-4'>Car Details</h1>
        <CarDetailList detail={detail} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.car.detail,
});

CarDetail.defaultProps = {
  detail: {},
};

CarDetail.propTypes = {
  dispatch: propTypes.func.isRequired,
  match: propTypes.object.isRequired,
  detail: propTypes.object,
};

export default connect(mapStateToProps)(CarDetail);
