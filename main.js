/******************
 * YOUR CODE HERE *
 ******************/

const isOdd = function(num){
  return num % 2 === 1
}

const onlyOdds =function(array){
  return array.filter(isOdd)
}

const isEven = function(num){
  return num % 2 === 0
}

const onlyEvens = function(array){
  return array.filter(isEven)
}

const isShort = function(str){
  return str.length < 7
}

const shortNamesOnly = function(array){
  return array.filter(isShort)
}

const isDName = function(name){
  return name.startsWith('D')
}

const dNames = function (names){
  return names.filter(isDName);
}

const containsLowercase = function(str){
return str !== str.toUpperCase()
}

const removeTrolls = function(arr){
  return arr.filter(containsLowercase)
}

const isTriStateArea = function(state){
  return state.endsWith('NY') ||  state.endsWith('NJ') || state.endsWith('CT')
}

const triStateAreaOnly = function(states){
  return states.filter(isTriStateArea)
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof isOdd === 'undefined') {
  isOdd = undefined;
}

if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof isEven === 'undefined') {
  isEven = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof isShort === 'undefined') {
  isShort = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof isDName === 'undefined') {
  isDName = undefined;
}

if (typeof dNames === 'undefined') {
  dNames = undefined;
}

if (typeof containsLowercase === 'undefined') {
  containsLowercase = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof isTriStateArea === 'undefined') {
  isTriStateArea = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}


module.exports = {
  isOdd,
  onlyOdds,
  isEven,
  onlyEvens,
  isShort,
  shortNamesOnly,
  isDName,
  dNames,
  containsLowercase,
  removeTrolls,
  isTriStateArea,
  triStateAreaOnly,
}
