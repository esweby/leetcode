/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function (nums) {
  let currLargest = 0;

  function recurse(arr, total, ind) {
    console.log(`Recursion starting`);
    console.log(` - arr: ${arr}`);
    console.log(` - total: ${total}`);
    console.log(` - ind: ${ind}`);
    for (let i = 1; i < arr.length; i++) {
      let base = arr[0];
      let next = arr[i];
      const gcdResult = gcd(base, next);
      console.log(` -- gcdResult: ${ind * gcdResult}`);
      const newTotal = total + ind * gcdResult;

      let nextArr = [...arr]
        .filter((curr, k) => k !== 0)
        .filter((curr, k) => k !== i - 1);

      console.log(" - next array: ", nextArr);

      if (nextArr.length < 2) {
        if (newTotal > currLargest) {
          currLargest = newTotal;
        }
        return;
      }

      recurse(nextArr, newTotal, ind + 1);
    }
  }

  recurse(nums, 0, 1);
  return currLargest;
};

function gcd(x, y) {
  while (x !== 0 || y !== 0) {
    if (x > y) {
      x = x - y;
    } else if (x < y) {
      y = y - x;
    } else if (x === y) {
      return x;
    }
  }
}

console.table(maxScore([3, 4, 6, 8])); // 11
console.log("---------------------------------");
console.table(maxScore([1, 2, 3, 4, 5, 6])); // 14
console.log("---------------------------------");
// All currently working bar this one and not sure how
// what is causing it to give the bad result
console.table(maxScore([171651, 546244, 880754, 412358])); // 60
