import React, { Component } from 'react';
import Counter from './counter'

export default class Counters extends Component {
    render() { 
        const {onReset, onIncrement, onDelete, counters} = this.props;
        return (
            <React.Fragment>
                <button onClick={onReset} className="btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => 
                    <Counter key={counter.id}
                                onIncrement={onIncrement} 
                                onDelete={onDelete} 
                                counter={counter} 
                                selected={true}>
                        {/* could have children but needs to be active in counter */}
                    </Counter>)}
            </React.Fragment>
        );
    }
}