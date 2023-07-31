var fruits = ['Apple', 'Banana', 'Orange'];
// fruits.pop('Mango');
var index = fruits.indexOf('Banana');
var addNew = fruits.splice(2, 1, "Watermelon");
console.log(addNew);
console.log(index);
console.log(fruits);