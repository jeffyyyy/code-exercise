import { connect } from 'react-redux';
import CarDetailPage from './CarDetailPage';

const mapStateToProps = state => ({
  detail: state.car.detail,
});

export default connect(mapStateToProps)(CarDetailPage);
