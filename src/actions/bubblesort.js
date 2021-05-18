/* eslint-disable no-loop-func */
import { SORTING_STARTED, SORTING_DONE } from "./types";

export const bubbleSort = (array, DELAY) => async (dispatch) => {
  const animations = [];
  var n = array.length;
  var i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      const animation = {};
      animation.comparision = [j, j + 1];
      if (array[j] > array[j + 1]) {
        animation.swap = [j, j + 1];
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } else {
        animation.swap = [0, 0];
      }
      animations.push(animation);
    }
  }
  const prevAnimation = [];
  for (let i = 0; i < animations.length; i++) {
    prevAnimation.push(animations[i].comparision);
    prevAnimation.push(animations[i].comparision);
    prevAnimation.push(animations[i].swap);
  }
  setTimeout(() => {
    dispatch({
        type: SORTING_DONE,
        payload: array
    })
}, prevAnimation.length * DELAY);
  for (let i = 0; i < prevAnimation.length; i++) {
    var bars = document.getElementsByClassName("array-bars");
    const colorChange = i % 3 !== 2;
    if (colorChange) {
      const color = i % 3 === 0 ? "green" : "rgb(255, 0, 234)";
      const [one, two] = prevAnimation[i];
      setTimeout(() => {
        bars[one].style.backgroundColor = color;
        bars[two].style.backgroundColor = color;
      }, i * DELAY);
    } else {
      setTimeout(() => {
        const [one, two] = prevAnimation[i];
        const tempHeight = bars[two].style.height;
        bars[two].style.height = `${bars[one].style.height}`;
        bars[one].style.height = `${tempHeight}`;
      }, i * DELAY);
    }
  }
dispatch({
    type: SORTING_STARTED,
    payload: array
  });
  
};
