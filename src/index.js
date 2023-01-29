const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const modernChars = {
    '**********': ' ',
  }

  for (let key in MORSE_TABLE) {
    let charArr = key.split('').map(item => item === '.' ? '10' : '11')
    let n = 10 - charArr.length*2
    modernChars['0'.repeat(n) + charArr.join('')] = MORSE_TABLE[key]
  }

function decode(expr) {
    // write your solution here
    let result =''
    for (let i = 0; i < expr.length; i += 10){
      const codeLetter = expr.slice(i, i + 10)
      for (let key in modernChars){
        if (codeLetter === key)
        result += modernChars[key]
      }
    }
    return result
}

module.exports = {
    decode
}