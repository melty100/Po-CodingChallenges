/////////////////////////////////////////////////////////////////////////
// Author: Connor Melton
// Date: 8/2/2021
// Description: Finds the LCS for two strings
// Source: https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/
/////////////////////////////////////////////////////////////////////////

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Enter two strings to find Longest Common Subsequence(LCS) \n', (input) => {
    console.log(formatInput(input));
    rl.close();
});

let formatInput = (input) => {
    try {

        let strs = input.split(' ');
        let s1 = strs[0].split('');
        let s2 = strs[1].split('');
        return lcs(s1, s2, s1.length, s2.length);

    } catch (error) {
        return "Invalid Input: Type two strings with a space inbetween and press enter";
    }
}

let lcs = (a1, a2, m, n) => {
    if (m == 0 || n == 0)
        return 0;
    if (a1[m - 1] == a2[n - 1])
        return 1 + lcs(a1, a2, m - 1, n - 1);
    else
        return Math.max(lcs(a1, a2, m, n - 1), lcs(a1, a2, m - 1, n));
}