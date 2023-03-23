// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(kanyau){
    // Create a new array with the contents of the original cats array and the new cat name
    const newCats = [...cats, kanyau];
    // Return the new array
    return newCats;
}
function prependCat(kanyau2){
    // Create a new array with the contents of the original cats array and the new cat name
    const newCats = [kanyau2, ...cats];
    // Return the new array
    return newCats;
}
function removeLastCat(){
    //Create a new array with all the cats except the last one
    const newCats = cats.slice(0, -1);
    //Return the new Array
    return newCats;
}
function removeFirstCat(){
    //Create a new array with all the cats except the first one
    const newCats = cats.slice(1);
    //Return the new Array
    return newCats;
}