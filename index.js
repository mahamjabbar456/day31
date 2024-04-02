// Question 91
let fruits = ["Apple", "Orange", "Banana"];
console.log(fruits);
fruits.push("Pear");
console.log(fruits);
// Question 92
function RemoveLastElementFromArray(fruit) {
    let lastelement = fruit.pop();
    return lastelement;
}
console.log(RemoveLastElementFromArray(fruits));
// Question 93
let index = fruits.indexOf("Banana");
fruits[index] = "Mango";
console.log(fruits);
export {};
