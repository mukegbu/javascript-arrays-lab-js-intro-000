var kittens = ["Milo","Otis","Garfield"] //define your array here

function destructivelyAppendKitten(name){
return kittens.push(name)
}
function destructivelyPrependKitten(name){
return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
return kittens.shift()
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}
function prependKitten(name){
  var newArray = [name,...kittens];
  return newArray;
}
function removeLastKitten(){
var newArray = kittens.slice( 0,2)
return newArray
}
function removeFirstKitten(1,3){
  var newArray =
}
