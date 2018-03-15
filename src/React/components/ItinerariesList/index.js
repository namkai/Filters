import { connect } from 'react-redux';
import { getItinerares } from 'Redux/modules/itineraries/selectors';
import View from './View';

const mapStateToProps = state => ({
  itineraries: getItinerares(state),
});

export default connect(mapStateToProps)(View);

