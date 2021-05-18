/* eslint-disable no-loop-func */
import { SORTING_STARTED, SORTING_DONE } from "./types";


export const quickSort = (array, DELAY) => async (dispatch) => {
    const animations = []
    quickSortHelper(array, 0, array.length -1, animations);
    const prevAnimation = [];
    for (let i = 0; i < animations.length; i++) {
      if(!animations[i].swapPivot) {
        prevAnimation.push(animations[i].comparision)
        prevAnimation.push(animations[i].comparision)
        prevAnimation.push(animations[i].swap)
      }else{
        prevAnimation.push(animations[i].swapPivot)
        prevAnimation.push(animations[i].swapPivot)
        prevAnimation.push(animations[i].swapPivot)
      }
    }
    console.log(prevAnimation);
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
        type:SORTING_STARTED,
        payload: array
    })
}
function quickSortHelper(array, low, high, animations){
    if(low < high){
        const pi = partition(array, low, high, animations)
        quickSortHelper(array, low, pi-1, animations)
        quickSortHelper(array, pi+1, high, animations)
    }
}

function partition(arr, low, high, animations){
    var pivot = arr[high];
        var i = (low-1);
        for (var j=low; j<high; j++)
        {
            const animation = {}
            animation.comparision = [j, high]
            if (arr[j] <= pivot)
            {
                i++;
                animation.swap = [i, j]
                swap(arr, i, j)
            }
            else{
                animation.swap = [0,0]
            }
            animations.push(animation)  
        }
        const animation = {}
        animation.swapPivot = [i+1, high]
        animations.push(animation)
        swap(arr, i+1, high)

        return i+1;

}

function swap(arr, i, j){
    let t = arr[j];
    arr[j] = arr[i];
    arr[i] = t;
}
