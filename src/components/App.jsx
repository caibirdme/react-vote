import React, { Component } from 'react';
import {List,Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

class App extends Component {
    render() {
        return this.props.children;
    }
}

export default App;