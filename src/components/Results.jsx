import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reacrMixin from 'react-mixin';
import Winner from './winner';

class Results extends Component {
    getPair() {
        return this.props.pair || [];
    }
    getVotes(entry) {
        if(this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    }
    render() {
        if(this.props.winner) {
            return <Winner ref="winner" winner={this.props.winner} />
        }
        return (
            <div className="results">
                <div className="tally">
                {this.getPair().map(entry => {
                    return (
                        <div key={entry} className="entry">
                            <h1>{entry}</h1>
                            <div className="voteCount">{this.getVotes(entry)}</div>
                        </div>
                    )
                })}
                </div>
                <div className="management">
                    <button ref="next"
                            className="next"
                            onClick={this.props.next}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

reacrMixin(Results.prototype, PureRenderMixin);

export default Results;