const validate = require('./validate.js');


function solve(a, b, c) {
    validate.validSolve(a, b, c);
 
    const D = b ** 2 - 4 * a * c;

    if (D < 0) {
      return [0, x1, x2];
    }else{
  

      const x1 = (-b + Math.sqrt(D)) / (2 * a);
      const x2 = (-b - Math.sqrt(D)) / (2 * a);
  
      return [2, x1, x2];
    }
  }
  
  module.exports.solve = solve;
  