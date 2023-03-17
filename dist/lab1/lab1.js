//SelectionSort
// const  arrNumber = [13,4,2,8,11];
// function selectionSort<T>(arr: T[]): T[] {
//     const n = arr.length;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//     for (let i = 0; i < n - 1; i++) {
//       let minI = i;
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minI]) {
//           minI = j;
//         }
//       }
//       if (minI !== i) {
//         const temp = arr[i];
//         arr[i] = arr[minI];
//         arr[minI] = temp;
//       }
//     }
//     return arr;
//   }
//   console.log(selectionSort(arrNumber));
//-------------------------BubbleSort-------------------------
// function bubbleSort<T>(arr: T[]): T[] {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }
// const arrNumber1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedArr1 = bubbleSort(arrNumber1);
// console.log(sortedArr1);
//-------------------------SortQick-------------------------
var arr1 = [4, 2, 7, 1, 9, 5];
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
}
var sortedArr = quickSort(arr1);
console.log(sortedArr); // [1, 2, 4, 5, 7, 9]
