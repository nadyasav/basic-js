import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  let arrayAllDigits = Array.from(n.toString());
  let newArray = '';
  let minDigit = Math.min.apply(null, arrayAllDigits);

  for(let i = 0; i < arrayAllDigits.length; i++){
    if(arrayAllDigits[i] != minDigit){
        newArray = newArray + arrayAllDigits[i];
    }else{
      minDigit = null;
    }
  }

  const result = Number(newArray);
  return result;
}
