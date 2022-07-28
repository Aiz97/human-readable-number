let integer = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let teen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
module.exports = function toReadable (n) {
    if (n == 0) return "zero";
    
    if (n < 10) return integer[n];

    if (n >= 10 && n < 20) return teen[n%10];

    if (n >=20 && n < 100) {
        if(n % 10 == 0) return tens[n / 10];
        else return tens[Math.trunc(n/10)] + ' ' + integer[n%10];
    }

    if (n >= 100 && n < 1000) {
        if (n % 100 == 0) return result = integer[n / 100] + " hundred";
        else if (Math.trunc(n%100/10) == 1) return result1 = integer[Math.trunc(n/100)] + " hundred " + teen[n%10];
        else if (Math.trunc(n%100/10) == 0) return result2 = integer[Math.trunc(n/100)] + " hundred " + integer[n%10];
        else if (n.toString()[2] == 0) return result4 = integer[Math.trunc(n/100)] + " hundred " + tens[Math.trunc(n%100/10)];
        else return result3 = integer[Math.trunc(n/100)] + " hundred " + tens[Math.trunc(n%100/10)] + " " + integer[n%10];
    }
    result.trim();
    result1.trim();
    result2.trim();
    result3.trim();
    result4.trim();
  }
