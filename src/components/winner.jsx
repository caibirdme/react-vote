import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';

class Winner extends Component {
    render() {
        return (
            <div className="winner">Winner is {this.props.winner}</div>
        );
    }
}

reactMixin(Winner.prototype, PureRenderMixin);

export default Winner;