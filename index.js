var kittens = ["Milo","Otis","Garfield", "Broom"] //define your array here

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
return kittens.push(name)
}
