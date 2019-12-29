import React, { Component } from 'react';
import '../SortingVisualizer/SortingVisualizer.css';

class SortingVisualizer extends Component {
    state = {
        array: []
    }

    componentDidMount() {
        console.log(`componentDidMount`);

        this.resetArray();
    }

    randomIntNumFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }// End function: randomIntNumFromInterval 

    resetArray = () => {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(this.randomIntNumFromInterval(7, 1000));
        }
        this.setState({ array })
    }// End of func resetArray

    render() {
        return (
            <div className='SortingVisualizer'>
                {this.state.array.map((value, index) => (
                    <div className='array-bar' key= {index}>
                        {value}
                    </div>
                ))}

            </div>
        )

    }



}// End class SortingVisualizer

export default SortingVisualizer;
