
function showStringData(a: string): string {
    return a
}

function showNumberData(b: number): number {
    return b
}
// Generic
function showData<T>(a: T): T {
    return a
}

showData<number>(10)

// const numArr = [1,2,3,5,8,13] // Fibonacci
const strArr = ["Hoa", "Duy", "Vu Anh"]
// const result = numArr.map(item => {
//     return item * item
// })

// console.log(result);


// function we17305<T>(arr: T[], callback: (item: T, index: number) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i], i)
//         temp.push(newItem)
//     }
//     return temp
// }

// const resultt = we17305(strArr, (item, index) => {
//     return item + "-we17305"
// })

// console.log(result, "we17305_map");