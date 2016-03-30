/**
 * Created by deenjun on 16/2/15.
 */
import {connect} from 'react-redux';
import Results from '../components/Results';
import * as actionCreator from '../action_creators';

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    };
}

export default connect(mapStateToProps, actionCreator)(Results);
