import React, { Component } from 'react';
import '../SortingVisualizer/SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';

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
        for (let i = 0; i < 310; i++) {
            array.push(this.randomIntNumFromInterval(5, 730));
        }
        this.setState({ array })
    }// End of func resetArray

    mergeSort = () => {
        const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a - b);
        // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
        //  console.log(sortedArray);
        console.log('ff');


        // console.log(this.arraysAreEqual(javaScriptSortedArray, sortedArray));
    }

    arraysAreEqual(arrayOne, arrayTwo) {
        if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
            if (arrayOne[i] !== arrayTwo[i]) return false;
        }
        return true;
    }

    quickSort = () => {

    }
    heapSort = () => {

    }
    bubbleSort = () => {

    }

    render() {
        return (
            <div className='array-container'>
                {this.state.array.map((value, index) => (
                    <div className='array-bar' key={index} style={{ height: `${value}px` }}>

                    </div>
                ))}
                <div>
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        )

    }

}// End class SortingVisualizer

export default SortingVisualizer;
