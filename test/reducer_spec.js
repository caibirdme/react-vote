/**
 * Created by deenjun on 16/2/15.
 */
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer', () => {
    it('handles SET_STATE', () => {
        const initState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                pair: List.of('Monkey', 'Bear'),
                tally: Map({
                    Monkey: 5,
                    Bear: 2
                })
            })
        };
        const nextState = reducer(initState, action);
        expect(nextState).to.equal(Map({
            pair: List.of('Monkey', 'Bear'),
            tally: Map({
                Monkey: 5,
                Bear: 2
            })
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const state = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    pair: ['Monkey', 'Bear'],
                    tally: {
                        Monkey:5
                    }
                }
            }
        };
        const nextState = reducer(state, action);
        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Monkey', 'Bear'],
                tally: {
                    Monkey: 5
                }
            }
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    pair: ['Monkey', 'Bear'],
                    tally: {
                        Monkey:5
                    }
                }
            }
        };
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Monkey', 'Bear'],
                tally: {
                    Monkey: 5
                }
            }
        }));
    });

    it('handles VOTE by setting hasVoted', () => {
       const state = fromJS({
           vote: {
               pair: ['Monkey', 'Bear'],
               tally: {
                   Monkey: 5
               }
           }
       });
       const action = {type: 'VOTE', entry: 'Bear'};
       const nextState = reducer(state, action);

       expect(nextState).to.equal(fromJS({
           vote: {
               pair: ['Monkey', 'Bear'],
               tally: {
                   Monkey: 5
               }
           },
           hasVoted: 'Bear'
       }));
    });

    it('does not set hasVoted for VOTE on invalid entry', () => {
        const state = fromJS({
            vote: {
                pair: ['Monkey', 'Bear'],
                tally: {
                    Monkey: 5,
                    Bear: 1
                }
            }
        });
        const action = {type: 'VOTE', entry: 'Dolphin'};
        const nextState = reducer(state, action);

        expect(state).to.equal(fromJS({
            vote: {
                pair: ['Monkey', 'Bear'],
                tally: {
                    Monkey: 5,
                    Bear: 1
                }
            }
        }));
    });

    it('removes hasVoted on SET_STATE if pair changes', () => {
        const state = fromJS({
            vote: {
                pair: ['Monkey', 'Bear'],
                tally: {
                    Monkey: 1
                }
            },
            hasVoted: 'Bear'
        });
        const action = {
            type: 'SET_STATE',
            state: {
                vote: {
                    pair: ['Dolphin', 'Tiger']
                }
            }
        };
        const nextState = reducer(state, action);

        expect(nextState).to.equal(fromJS({
            vote: {
                pair: ['Dolphin', 'Tiger']
            }
        }));
    });
});
