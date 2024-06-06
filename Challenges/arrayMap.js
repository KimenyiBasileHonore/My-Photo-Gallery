function subArrayWithSum(arr, target) {

    let start = 0;
    let presentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        presentSum += arr[end];

        while (presentSum > target && start <= end) {
            presentSum -= arr[start];
            start++;
        }

        if (presentSum === target) {
            return true;
        }
    }

    return false
}

let arr = [4, 2, 7, 1, 9, 5];
let target = 17;
console.log(subArrayWithSum(arr, target));