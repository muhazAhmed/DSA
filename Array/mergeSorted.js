// merge 2 sorted array

const solution = (a, b) => {
  let merged = [],
    aElm = a[0],
    bElm = b[0],
    i = 1,
    j = 1;

  if (a.length == 0) return b;
  if (b.length == 0) return a;
  /* 
  if aElm or bElm exists we will insert to merged array
  (will go inside while loop)
   to insert: aElm exists and bElm doesn't exists
             or both exists and aElm < bElm
    this is the critical part of the example            
  */
  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      merged.push(aElm);
      aElm = a[i++];
    } else {
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
};
const result = solution([1, 3, 6, 8], [11, 16, 20]);
console.log(result); //output : [0,3]

// Time Complexity = O(n)
//Space Complexity = O(n^2)
