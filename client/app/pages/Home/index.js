import { connect } from 'react-redux';
import HomePage from './HomePage';

const mapStateToProps = state => ({
  carofweek: state.car.carofweek,
  loading: state.car.loading,
});

export default connect(mapStateToProps)(HomePage);
