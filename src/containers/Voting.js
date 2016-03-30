/**
 * Created by deenjun on 16/2/15.
 */
import Voting from '../components/Voting';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

function mapStatetoProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner'),
        hasVoted: state.get('hasVoted')
    };
}

export default connect(mapStatetoProps, actionCreators)(Voting);