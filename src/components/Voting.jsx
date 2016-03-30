import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './winner';
import Vote from './Vote';
import reactMixin from 'react-mixin';

class Voting extends Component {
    render() {
        if(this.props.winner) {
            return <Winner winner={this.props.winner} ref="winner" />
        }
        return <Vote {...this.props} />
    }
}

reactMixin(Voting.prototype, PureRenderMixin);

export default Voting;