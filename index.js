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
  // or ES6 way
  // var newArray = [...kittens];
  newArray.push(name)
  return newArray
}
