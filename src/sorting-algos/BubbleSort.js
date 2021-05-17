const BubbleSort = async (array) => {
    const animations = [];
    var n = array.length;
    var i,j;
    for(i= 0; i< n-1; i++){
        for(j= 0; j< n-i-1; j++){
            const animation = {};
            animation.comparision = [j, j+1];            
            if(array[j] > array[j+1]){
                animation.swap = [j, j+1];
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            else{
                animation.swap = [0,0];
            }
            animations.push(animation);
        }
    }
    return animations
    // tempArr.sort((a,b)=> {return a-b})
    // console.log(arr);
    // const check = EqualCheck(array, tempArr)
    // console.log(check)
}

// function EqualCheck(one,two) {
//     if(one.length !== two.length){
//         return ('length one = '+ one.length + "length two = "+  two.length);
//     }
//     else{
//         for(let i=0; i< one.length; i++){
//             if(one[i] !== two[i]){
//                 return (`element ${i} = ${one[i]}, ${two[i]} `);
//             }
//         }
//     }
//     return 'true';
// }

export default BubbleSort;