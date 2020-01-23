'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */


validator.isValid = (input, rules) => {
  return true;
};



/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */



validator.isString = (input) => {
  return typeof input === 'string';
};




/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */



validator.isNum = (input) => {
  return typeof input === 'number';
};



/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */



validator.isFunction = (input) => {
  return typeof input === 'function';
};



/**
 * Is this a array?
 * @param input
 * @returns {boolean}
 */



validator.isArray = (input) => {
  return typeof input === 'array';
};



/**
 * Is this a object?
 * @param input
 * @returns {boolean}
 */




validator.isObject = (input) => {
  return typeof input === 'object';
};




/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */



 
validator.isBoolean = (input) => {
  return typeof input === 'boolean';
};
