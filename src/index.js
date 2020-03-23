
module.exports = function toReadable (number) {
  const text_number = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const text_number_tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  if (Number.isInteger(number) == true) {
  if (number < -100) return '-' + twoNum(number);
  else if (number < -1000) return '-' + threeNum(number);
  else if (number == 0) return 'zero';
  else if (number < 100) return twoNum(number);
  else if (number < 1000) return threeNum(number);
  else if (number > 1000) return 'no solution in this function';
  }
  else return undefined;

  function twoNum(dozens) {
    if (dozens < 20) {return text_number[dozens];} 
    else if (dozens % 10 == 0) {return text_number_tens[Math.trunc(dozens / 10)]} 
    else {return text_number_tens[Math.trunc(dozens / 10)] + ' ' + text_number[dozens % 10];}
    }
  function threeNum(hundreds) {
    if (hundreds % 100 == 0) {return text_number[Math.trunc(hundreds / 100)] + ' hundred';} 
    else {return text_number[Math.trunc(hundreds / 100)] + ' hundred ' + twoNum(hundreds % 100);}
  } 
}