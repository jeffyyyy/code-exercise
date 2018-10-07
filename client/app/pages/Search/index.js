import { connect } from 'react-redux';
import SearchPage from './SearchPage';

const mapStateToProps = state => ({
  makes: state.car.makes,
  models: state.car.models,
});

export default connect(mapStateToProps)(SearchPage);
