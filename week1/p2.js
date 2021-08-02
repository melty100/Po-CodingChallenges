/////////////////////////////////////////////////////////////////////////
// Author: Connor Melton
// Date: 8/2/2021
// Description: Finds the largest and smallest elements in a given array
/////////////////////////////////////////////////////////////////////////

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Enter values of an Arary to see the Largest and Smallest elements \n', (input) => {
    console.log(getOut(input));
    rl.close();
});

let getOut = (input) => {
    let nums = input.split(' ').map((x) => {return +x});
    console.log(nums);
    return `Largest Element: ${Math.max(...nums)}, Smallest Element: ${Math.min(...nums)}`;
}