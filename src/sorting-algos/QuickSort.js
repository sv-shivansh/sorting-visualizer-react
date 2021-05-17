const animations = []
const QuickSort = (array) => {
    quickSortHelper(array, 0, array.length -1);
    return animations
}
function quickSortHelper(array, low, high){
    if(low < high){
        const pi = partition(array, low, high)
        quickSortHelper(array, low, pi-1)
        quickSortHelper(array, pi+1, high)
    }
}

function partition(arr, low, high){
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

export default QuickSort