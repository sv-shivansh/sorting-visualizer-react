import React, { useState, useEffect, useCallback } from "react";
import "./css/SortingVisualizer.css";

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);
  const resetArray = useCallback(() => {
    var i = 0;
    var x = [];
    for (i = 0; i < 100; i++) {
      x.push(getRandomArbitrary(10, 500));
    }
    setArr(x);
  }, []);

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  useEffect(() => {
    resetArray();
  }, [resetArray]);

  function bubbleSort() {alert('Working on this functionality')}

  function quickSort() {alert('Working on this functionality')}

  function mergeSort() {alert('Working on this functionality')}

  return (
    <div className="array-container">
      {arr.map((value, id) => (
        <div
          className="array-bars"
          key={id}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <div className='button-container'>
        <button onClick={() => resetArray()}>Generate new Array</button>
        <button onClick={() => bubbleSort()}>Bubble Sort</button>
        <button onClick={() => mergeSort()}>Merge Sort</button>
        <button onClick={() => quickSort()}>Quick Sort</button>

      </div>
    </div>
  );
};

export default SortingVisualizer;
