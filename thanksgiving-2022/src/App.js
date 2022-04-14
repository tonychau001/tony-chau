import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'
import Bedrooms from './components/bedrooms';
import { Chart } from './components/chart';
// import './App.css'

// Childrens are called recursively
// App - Constructor
// App - Render
// App - Mount - Ajax calls to server/db?
// App - Update events

export default class App extends Component {
    state = { 
        counters:[
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    } 

    render() { 
        return (   
            <React.Fragment>
                <NavBar />
                {/* <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/> */}
                <main className="container">
                    <Chart />
                    <Bedrooms />
                    <Counters 
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }

    componentDidMount

    handleIncrement = counter => {
        // console.log('Increment Clicked', this.state.count);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    }
    
    handleDelete = (counterId) => {
        console.log('Event Handler called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }
    
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
        this.setState({ counters });
    }
}