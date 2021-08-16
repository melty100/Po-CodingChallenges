/////////////////////////////////////////////////////////////////////////
// Author: Connor Melton
// Date: 8/16/2021
// Description: Takes a phrase and number, and outputs the phrase in buckets the size of the number provided.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Enter phrase to be bucketized and max size of buckets\n', (input) => {
    console.log(formatInput(input));
    rl.close();
});

let formatInput = (input) => {
    try {
        let words = input.split(' ');
        let size = +words.pop();
        return bucketize(words, size);
    } catch (error) {
        return error.message;
    }
}

let bucketize = (words, size) => {
    let out = [];
    let b = '';
    for(let i = 0; i < words.length; i++){
        let w = words[i];
        if(w.length > size){
            return [];
        }
        else if(b.length + w.length + 1 > size){
            out.push(b);
            b = w;
        }
        else{
           b ? b += ' ' + w : b = w;
           if((i+1) == words.length) out.push(b);
        }
    }
    return out;
}