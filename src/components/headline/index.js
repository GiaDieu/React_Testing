
import React, { Component } from 'react'
import './style.scss';

class HeadeLine extends Component {

    render() {
        
        const {header, desc} = this.props
        if(!header) return null;

        return (
            <div data-test='headLineComponent'>
               <h1 data-test='header'>{header}</h1>
               <p data-test='desc'>{desc}</p>
            </div>
        )
    }
}

export default HeadeLine;