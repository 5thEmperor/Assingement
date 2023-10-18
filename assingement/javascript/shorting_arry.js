function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const dynamicArray = [5, 2, 9, 1, 5, 6, 10, 3, 7]; 

sortArrayDescending(dynamicArray);

console.log("Sorted Array in Descending Order:", dynamicArray);
