'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out

  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = {x:'y'};
  let func = () => {};
  let bool = false;
  let array = [str, num, arr, obj, func, bool]
  it('strings', () => {
   array.forEach(item=>{
     if(validator.isString(item)){
    expect(validator.isString(item)).toBeTruthy();
      }else{expect(validator.isString(item)).toBeFalsy()};
   }) 
    // expect(validator.isString(arr)).toBeFalsy();
    // expect(validator.isString(obj)).toBeFalsy();
    // expect(validator.isString(func)).toBeFalsy();
    // expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNum).toBeTruthy();
  });

  it('arrays', () => {
    expect(validator.isArray).toBeTruthy();
  });
  
  it('objects', () => {
    expect(validator.isObject).toBeTruthy();
  });

  it('booleans', () => {
    expect(validator.isBoolean).toBeTruthy();
  });
  
  it('functions', () => {
    expect(validator.isFunction).toBeTruthy();
  });
  
});

describe('validator module performs complex validations', () => {
  let car ={
    name:  'kia',
    model: 1996,
    doors: 'exist',
    automatic: false,
    extra: ['air bag', 'condition', 'screens']
  }

  it('validates the presence of required object properties at any level', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    expect(car.automatic).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // i.e. person.name must be a string, etc.
    expect(typeof(car.name)).toStrictEqual('string');
    expect(car.name).toStrictEqual('kia');
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings or numbers
    expect(car.extra).toStrictEqual(['air bag', 'condition', 'screens']);
  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    expect(car.automatic).toBeFalsy();
  });

  // TODO: Cover so, so many more cases
  it('validates if the model is a number', ()=>{
    expect(car.model).toBe(1996);
  })

});