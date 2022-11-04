// remove duplicate ele from a given array

function solution(array) {
  let exists = {}
  let newArr = []
  let ele
  for (let i = 0; i < array.length; i++) {
    ele = array[i]
    if (!exists[ele]) {
        newArr.push(ele)
        exists[ele] = true
    }
  }
  return newArr
}
var result = solution([1,2,2,3,4,4,5]);
console.log(result);    //otput : [1,2,3,4,5]

// time complexity = O(n)
//space complexity = O(n^2)