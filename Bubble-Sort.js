/*
    Bubble Sort
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

let x = [7, 5, 2, 4, 3, 9];
let y = [9, 7, 5, 4, 3, 1];
let z = [1, 2, 3, 4, 5, 6];
bubbleSort(x);
bubbleSort(y);
bubbleSort(z);