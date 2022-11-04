// Reverse the given string String

const solution = (s) => {
    let str = ''
    for (let i = s.length-1; i >= 0; i--) {
        str += s[i]
    }
    return str
  };
  const result = solution("Hello World");
  console.log(result);         //output : dloW olleH
  
  
  // Time Complexity = O(n)
  //Space Complexity = O(1)
  //==================> method 2 <========================
  
  const solutions = (s2) => {
    if(!s2 || s2.length <2) return s2;
  
    return s2.split('').reverse().join('');
    };
    const results = solutions("Hello World");
    console.log(results);         //output : dloW olleH

  
  