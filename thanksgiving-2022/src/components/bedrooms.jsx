import React, { Component } from 'react';
import '../js/bedroom.css'

export default class Bedrooms extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                    Blank
                    </div>
                    <div className="col">
                    November 23, 2022
                    </div>
                    <div className="col">
                    November 24, 2022
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                    One of three columns
                    </div>
                    <div className="col">
                    One of three columns
                    </div>
                    <div className="col">
                    One of three columns
                    </div>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                    One of three columns
                    </div>
                    <div className="col">
                    One of three columns
                    </div>
                    <div className="col">
                    One of three columns
                    </div>
                </div>
            </div>
        );
    }
}