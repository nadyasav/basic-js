import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  if(n > 9){
    let arrayAllDigits = Array.from(n.toString());
    arrayAllDigits = arrayAllDigits.map(Number);
    let result = 0;
    let resultTemp = 0;

    do {
      for(let i = 0; i < arrayAllDigits.length; i++){
        resultTemp = resultTemp + arrayAllDigits[i];
      }
      if(resultTemp > 9){
        arrayAllDigits = Array.from(resultTemp.toString());
        arrayAllDigits = arrayAllDigits.map(Number);
        resultTemp = 0;
      }else{
        result = resultTemp;
      }
      
    }while(result == 0);

    return result;
    
  }else{
    return n;
  } 
}
