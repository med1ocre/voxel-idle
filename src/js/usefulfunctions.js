export default function convertToFractionFromDecimal(decimal) {
    if (decimal === 1) {
      return '1/1';
    }
  
    let numerator = decimal * 100;
    let denominator = 100;
  
    while (numerator % 1 !== 0) {
      numerator *= 10;
      denominator *= 10;
    }
  
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const commonDivisor = gcd(numerator, denominator);
  
    return `${numerator / commonDivisor}/${denominator / commonDivisor}`;
  }