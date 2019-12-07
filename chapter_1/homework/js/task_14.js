var animal = prompt('dog')
var newArr = []; 
    for (var y = 0; y < animal.length; y++) {
    for (var x = 0; x < animal.length-y; x++) {
        newArr.push(animal.slice(y, animal.length - x));
    }
}
console.log(newArr);
 