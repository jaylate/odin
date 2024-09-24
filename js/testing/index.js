function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) reversedStr += str[i];
  return reversedStr;
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const shiftedAlphabet = alphabet.split("");

  const reverse = (() => {
    if (shift < 0) {
      shift = abs(shift);
      return true;
    } else return false;
  })();

  for (let shifts = 0; shifts < shift; shifts++) {
    if (reverse) shiftedAlphabet.unshift(shiftedAlphabet.pop());
    else shiftedAlphabet.push(shiftedAlphabet.shift());
  }

  let shiftedStr = "";
  for (let i = 0; i < str.length; i++) {
    let letter = alphabet.includes(str[i].toLowerCase())
      ? shiftedAlphabet[alphabet.indexOf(str[i].toLowerCase())]
      : str[i];
    if (str[i].toUpperCase() === str[i]) letter = letter.toUpperCase();
    shiftedStr += letter;
  }
  return shiftedStr;
}

function analyzeArray(arr) {
  return {
    average:
      arr.reduce((accumulator, currentValue) => accumulator + currentValue) /
      arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
