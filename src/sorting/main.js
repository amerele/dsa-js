
// O(n^2) time, O(1) space
// Iterate through an array and compare each element to the next one, swapping the greater one to the right.
// Repeat until no swaps are needed, indicating the array is sorted.
function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([5, 1, 3, 7, 9, -2]));

// O(n log n) time, O(n) space
// Split the array into smaller arrays recursively, sort each one and then merge them back together.
// Divide and conquer approach.
function mergeSort(arr) {
    const merge = (left, right) => {
        let merged = [];
        let l = 0;
        let r = 0;

        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                merged.push(left[l]);
                l++;
            } else {
                merged.push(right[r]);
                r++;
            }
        }
        
        // merge the leftovers
        return merged.concat(l < left.length ? left.slice(l) : right.slice(r));
    };

    const split = (arr) => {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const leftSide = arr.slice(0, mid);
        const rightSide = arr.slice(mid);

        return merge(split(leftSide), split(rightSide));
    };

    return split(arr);
}

//console.log(mergeSort([5, 1, 3, 7, 13, 100, 9, -2]));