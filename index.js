const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    var newArray = cats.slice();
    newArray.push(name)
    return newArray
}

function prependCat(name) {
    var newArray = cats.slice();
    newArray.unshift(name)
    return newArray
}

function removeLastCat(name) {
    var newArray = cats.slice();
    newArray.pop();
    return newArray
}

function removeFirstCat(name) {
    var newArray = cats.slice();
    newArray.shift();
    return newArray
}
