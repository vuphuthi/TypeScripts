var numArr = [1, 2, 3, 5, 8, 13];
// const strArr = ["Hoa", "Duy", "Vu Anh"]
var selectionSort = function (arr) {
    for (var i = 0; arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; i++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
};
selectionSort(numArr);
console.log(numArr);
