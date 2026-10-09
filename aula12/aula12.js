let varA = 'A';
let varB = 'B';
let varC = 'C';

// const varATemp = varA;
// varA = varB;
// varB = varC;
// varC = varATemp;;

//outra opção

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);