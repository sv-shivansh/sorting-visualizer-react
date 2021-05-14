/* eslint-disable no-loop-func */
import React, { useState, useEffect, useCallback } from "react";
import BubbleSort from '../sorting-algos/BubbleSort'
import "./css/SortingVisualizer.css";

const SortingVisualizer = () => {
  const DELAY = 10;
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

  function bubbleSort() { 
    const animations = BubbleSort(arr);
    const prevAnimation = [];
    for(let i=0; i<animations.length; i++ ){
      prevAnimation.push(animations[i].comparision)
      prevAnimation.push(animations[i].comparision)
      prevAnimation.push(animations[i].swap)
    }
      for(let i = 0; i< prevAnimation.length; i++){
        var bars = document.getElementsByClassName('array-bars');
        const colorChange = (i % 3 !== 2)
        if(colorChange){
          const color = (i % 3 === 0)? 'green': 'rgb(255, 0, 234)'
          const [one, two] = prevAnimation[i]
          setTimeout(() => {
            bars[one].style.backgroundColor = color;
            bars[two].style.backgroundColor = color;
          }, i*DELAY)
        }
        else{
          setTimeout(() => {
            const [one, two] = prevAnimation[i]
            const tempHeight = bars[two].style.height;
            bars[two].style.height = `${bars[one].style.height}`;
            bars[one].style.height = `${tempHeight}`
          }, i*DELAY)
        }
      }
  }
  
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
