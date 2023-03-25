// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);

}

function destructivelyRemoveLastCat(){
    cats.pop();

}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const catsCopy = [...cats,name];
    return catsCopy;

}

function prependCat(name){
    const catsCopy = [name,...cats];
    return catsCopy;

}

function removeLastCat(){
    const catsCopy = cats.slice(0,2);
    return catsCopy;

}
function removeFirstCat(){
    const catsCopy = cats.slice(1);
    return catsCopy;
}


