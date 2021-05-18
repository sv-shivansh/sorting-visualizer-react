/* eslint-disable no-loop-func */
import React, { useEffect } from "react";
import { generateNewArray } from '../actions/array'
import { bubbleSort } from '../actions/bubblesort'
import { quickSort } from '../actions/quicksort'
import { mergeSort } from '../actions/mergesort'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import "./css/SortingVisualizer.css";

const SortingVisualizer = ({generateNewArray, bubbleSort, array, isSorting, quickSort, mergeSort,animations}) => {
  const DELAY = 10;
  useEffect(() => {
    generateNewArray();
  }, [generateNewArray]);

  async function BubbleSort() {
    bubbleSort(array.slice(), DELAY);
  }

  async function QuickSort() {
    quickSort(array.slice(), DELAY);
  }

  function MergeSort() {
    mergeSort(array.slice(), DELAY);
  }

  return (
    <div className="array-container">
      {array.map((value, id) => (
        <div
          className="array-bars"
          key={id}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <div className="button-container">
        <button disabled= {isSorting} onClick={() => generateNewArray()}>Generate new Array</button>
        <button disabled= {isSorting} onClick={() => BubbleSort()}>Bubble Sort</button>
        <button disabled= {isSorting} onClick={() => MergeSort()}>Merge Sort</button>
        <button disabled= {isSorting} onClick={() => QuickSort()}>Quick Sort</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  array: state.sorting.array,
  isSorting: state.sorting.isSorting,
  animations: state.sorting.animations
})
SortingVisualizer.protoTypes = {
  generateNewArray: PropTypes.func.isRequired,
  bubbleSort: PropTypes.func.isRequired,
  quickSort: PropTypes.func.isRequired,
  mergeSort: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {generateNewArray, bubbleSort, quickSort, mergeSort })(SortingVisualizer);
