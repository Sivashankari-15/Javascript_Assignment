//function to compute the intersection of two arrays

function intersection(arr1, arr2) {
    let resultArr = []
    for (let i = 0; i < arr1.length; i++) {
        //checks if element exists in arr2 and not already in result
        if (arr2.includes(arr1[i]) && !resultArr.includes(arr1[i])) {
            resultArr.push(arr1[i])
        }
    }
    return resultArr
}

// Example calls
// Case 1: intersection
console.log(intersection([100, 200, 300], [200, 600, 700]));
// Output: [200]

// Case 2: No common elements
console.log(intersection([1, 2, 3], [4, 5, 6]));
// Output: []

// Case 3: All elements common
console.log(intersection([10, 20, 30], [10, 20, 30]));
// Output: [10, 20, 30]

// Case 4: With duplicates in input arrays
console.log(intersection([5, 5, 10, 15], [5, 10, 10, 20]));
// Output: [5, 10]

