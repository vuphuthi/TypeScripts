//SelectionSort
// const  arrNumber = [13,4,2,8,11];
// function selectionSort<T>(arr: T[]): T[] {
//     const n = arr.length;
  
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
const arr1 = [4, 2, 7, 1, 9, 5];

function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left: T[] = [];
    const right: T[] = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  const sortedArr = quickSort(arr1);
  console.log(sortedArr); // [1, 2, 4, 5, 7, 9]