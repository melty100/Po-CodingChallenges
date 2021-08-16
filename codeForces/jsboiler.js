let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
    const {EOL} = require('os')
    const lines = i.split(EOL) /*your input text, split by lines*/
    console.log(lines);    
})