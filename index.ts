// Question 91
let fruits:string[] = ["Apple","Orange","Banana"];
console.log(fruits);
fruits.push("Pear");
console.log(fruits);

// Question 92

function RemoveLastElementFromArray(fruit:string[]):string|undefined {
    let lastelement =  fruit.pop();
    return lastelement;
}

console.log(RemoveLastElementFromArray(fruits));

// Question 93
// I am use two method here indexof method use to get index of element and then use index to change element in array
let index = fruits.indexOf("Banana");
fruits[index] = "Mango";
console.log(fruits)