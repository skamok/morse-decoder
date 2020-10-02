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

function decode(expr) {
    let mes_arr =[];
    let mes_arr_morze =[];
    let message = '';
    for (let i = 0; i < expr.length; i = i + 10) {
      mes_arr.push(expr.slice(i, i+10));
    }
    mes_arr.forEach( (element) => {
      let lit ='';
      if (element !== '**********') { 
      for (let i = 0; i<element.length; i = i+2) {
        if (element.slice(i, i+2) === '10') { lit += '.'}
        if (element.slice(i, i+2) === '11') { lit += '-'}
      }
      mes_arr_morze.push(lit);
      } else {mes_arr_morze.push(' ');}
      
    });
    mes_arr_morze.forEach(element => {
     if (element !== ' ') {
       message += MORSE_TABLE[element];
     } else {
       message += ' ';
     }
    })
    return message;
 }

module.exports = {
    decode
}