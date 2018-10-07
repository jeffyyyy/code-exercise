import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ListLabel = styled.p.attrs({
  className: 'font-weight-bold text-right mr-3 mb-1',
})`
  flex: 1;
`;

const ListValue = styled.p.attrs({
  className: 'mb-1',
})`
  flex: 1;
`;

class CarDetailList extends React.Component {
  render() {
    const { name, price, review, imageUrl } = this.props.detail;
    return (
      <React.Fragment>
        <div className='d-flex'>
          <ListLabel>Model:</ListLabel>
          <ListValue>{name}</ListValue>
        </div>
        <div className='d-flex'>
          <ListLabel>Price:</ListLabel>
          <ListValue>{price}</ListValue>
        </div>
        <div className='d-flex'>
          <ListLabel>Review:</ListLabel>
          <ListValue>{review}</ListValue>
        </div>
        <img src={imageUrl} alt="Car of Week" style={{ width: '100%' }} />
      </React.Fragment>
    );
  }
}

CarDetailList.propTypes = {
  detail: propTypes.object.isRequired,
};

export default CarDetailList;

