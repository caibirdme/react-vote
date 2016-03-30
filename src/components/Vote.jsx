import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';

class Vote extends Component {
    getPair() {
        return this.props.pair || [];
    }
    handleClick = entry => () => this.props.vote(entry);
    isDisabled(entry) {
        return !!this.props.hasVoted;
    }
    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }
    render() {
        return (
            <div className="voting">
                {this.getPair().map(entry => {
                    return (
                        <button
                            key={entry}
                            onClick={this.handleClick(entry)}
                            disabled={this.isDisabled(entry)}
                        >
                            <h1>{entry}</h1>
                            {
                                this.hasVotedFor(entry) ?
                                    <div className="label">Voted</div> : null
                            }
                        </button>
                    );
                })}
            </div>
        );
    }
}

reactMixin(Vote.prototype, PureRenderMixin);

export default Vote;