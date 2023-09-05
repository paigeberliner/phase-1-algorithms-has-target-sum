function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  O(n)
*/

/* 
  Add your pseudocode here
1. create a function hasTargetSum()
   Two arugements: 
   Array of integers 
   Target integer 

2. if array [i] + array [i+1] (as long as i+1 > array.length) === target
return true 
else
return false 

/*
  let i = each element in the array 
  let j = each element in the array + 1 
  i+j = sum of each elmeent in the array 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
