// Basics of JavaScript

/*
    Mutiline Comment
    -- Variable Declaration in JS --
    Primitive Types: Strings: Integers, Floats, Boolean, Array, Object (aka dictionaries)
    Functions in JS
    Looping/Conditional Statements in JS 
*/

// String Variable
var name_1 = 'Joel' // let name_1 or const name_1
console.log(name_1)
    
// difference between var, const, let -- MOSTLY scope

/*
    var keyword is usedd to instanitatie a global variable anywhere on the page
    let keyword is used to instanitate a block bound variable inside an object, loop, function etc
    const is exactly the same as let, but does not allow the value stored to change
*/

//if u use const name_2 it won't let you override name_2

let name_2 = 'Coding Temple'
name_2= 'Nate w'
console.log(name_2)

// let name_2 = 'Coding Temple'
// name_2= 'Nate w'
// console.log(name_2)

// Integer variable
let some_number = 80; // can use let, const, or var to hole any data type

console.log(some_number)

// Float variable

let some_float = 3.14;

console.log(some_float)

// Array Variable

let some_array= [1,2,3,4,5]
console.log(some_array)

//Object Variable
// Dictionary in python
var some_object= {'test': 'Here is our first object!'}
console.log(some_object)

// JS HOISTING example to the top
console.log(some_new_string)
var some_new_string= 'This is a new string';
console.log(some_new_string)

// var first_name;
// var last_name;
// console.log(first_name) //undefined
// first_name = 'Nate';
// last_name = 'Welter';
// console.log(first_name)
// console.log(last_name)

//console.log(new_string) //better to have this error than underdined
// better way for declaring a variable
let new_string = '1234codingtemple';
const other_string = 'CodingIsFun'; //const makes it unchangeable

/*
    Basic Math
*/

// add
let sum = 5 + 5; // incrementation +=5
console.log(sum)
console.log(5+5)

// Subtraction
let diff = 10 - 5; // decrementation -=5
console.log(diff)

//Mutiplication
let prod = 5*5; // increment *=5
console.log(prod)

//Division
let div = 5/5; // decrement /=5
console.log(div)


// Exponential
let square = 5**2 // increment **=2
console.log(square)

// Ceiling and Floor
let find_ceil = Math.ceil(25.8) //26
console.log(find_ceil)

let find_floor = Math.floor(25.8) //25
console.log(find_floor)

// Modulo (remainder) same as Python
console.log(10%2)

//Mind Bender #1
let this_var = some_float + '4'; 
console.log(this_var)
//'3.14' + '4' = 3.144

//Mind Bender #2
let another_var = some_float + parseFloat('4');
console.log(another_var)

// Variable redeclaration using let
let nfl_goat = 'Tome Brady';
console.log(nfl_goat)

nfl_goat = 'Peyton Manning'; // once u used let no need to redelcare
console.log(nfl_goat)

// // SYNTAX ERROR
// let nfl_goat = 'Walter';
// console.log(nfl_goat) // error saying it already been declared

/* 
    ==== JS FUNCTIONS ===
*/

// Regular named function (no parameters)
function addNums(){
    let num = 4;
    let num2 =5;

    return num+ num2
}


// calling the function
console.log(addNums()) // 9

//function with 2 parameters
function addNums2(num, num2){
    return num+ num2
};

console.log(addNums2(10, 12)) //22

//defining function as a variable
let addNums3 = function(num, num2){
    return num + num2 // same thing
};

console.log(addNums3(4,4)) //8

// ES6+ Arrow function syntax - no parameters
let mutiplyNums = () => {
    let num = 4;
    let num2 = 5;
    return num * num2
};

console.log(mutiplyNums())

/* 
    ES6 Syntac with params
    SINGLE PARAMETER -- does not need parentheses around it -- mutple params does need paranteses

*/

let cubed = (num) => {
    return num ** 3
};

let cubbed2 = num =>{
    return num **3
};

console.log(cubed)
console.log(cubbed2(3))
// both 27

let doubleNum=(num1, num2) => {
    return (num1*2) + (num2 * 2)
};

console.log(doubleNum(10,2));
//24

// JS Closure 
// Self-Invoking Function
console.log((function(name){
    let hello= 'Hellow Word' + name;
    return hello
})('Nate'))
//similar to lambda = Hello Word Nate

// JavaScript Control
//If (conditional) statements

let determineAge = (age) => {
    if (age < 18){
        return 'Minor'
    }   else if (age >= 18 && age <= 65 ){
        return 'Adult'
    }   else {
        return 'Senior'
    }
};

console.log(determineAge(50))

// OR keyword || 
let determineAge2 = (age) => {
    if (age < 18){
        return 'Minor'
    }   else if (age >= 18 || age <= 65 ){
        return 'Adult'
    }   else {
        return 'Senior'
    }
};

console.log(determineAge2(50))

// Ternary Operators
// syntax:
// condition ? <value to return> : <another conidtion (else if)>? <next value to return>: <else block values>

let determineAge3 = (age) => {
    return (age < 18)? 'Minor': (age >= 18 && age <= 65) ? 'Adult': 'Senior'
}
console.log(determineAge3(50))

// For Loop in JavaScript
// For Loop syntax -- for (keyword)(counter; condition; incrementer/decrementer)
let countByOne = () =>{
    // for Loop
    for(let i = 0; i <10; i++){
        console.log(i)
    } 
    return 'The counting has stopped'
    //i++ means incrmenet by 1
}


// decrementation for loop
let decreaseByOne = () =>{
    // for Loop
    for(let i = 20; i >0; i--){
        console.log(i)
    } 
    return 'The counting has stopped'
    //i++ means incrmenet by 1
}

console.log(decreaseByOne())

// While Loop - Javascript
let countWithWhile = () =>{
    let i= 0;// Counter
    let text = '';

    while(i < 10){
        text += `This number is.. ${i} \n` //use ` near 1 key
        i++
    }
    return text
}
console.log(countWithWhile())


// Do-While loop in JS
//not very often
let countWithDoWhile = () =>{
    let i = 8;
    let text ='';

    //do
    do{
        text += `This number is... ${i} \n`
        i++
    }
    while(i <10)
    return text
}
console.log(countWithDoWhile())
// This number is... 8 
// This number is... 9 

/*
JS Arrays: Looping, methods, Array String Methods
*/

//Create a new array group_of_names
let group_of_names = ['Terry','Ben','Ash','Brock','Misty',18,['Misty']]

//Grab a value by index
console.log(group_of_names[0]) //Terry

// Deconstruction of an array
var terry, ben, ash;
[terry, ben, ash] = group_of_names
// terry = group_of_names[0]
// ben = group_of_names[1]
// ash =group_of_names[2]
console.log(terry, ben, ash)

// Method #1 - most common for looping through Arrays
let showNames = () => {
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'Done with list'
};
console.log(showNames())

//Method #2 for looping (for Each())
group_of_names.forEach(
    num => console.log(num)
);

// JS Array Method: Array.toString()
console.log(group_of_names.toString())
// typecheck
console.log(typeof(group_of_names.toString()))

// JAVASCIRPY ARRAY METHODS: .map(), .filter(), .reduce()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i 
    }else{
        return false
    }
});

console.log(b_names)

//long form of.map()
let b_names_2 = () =>{
    let new_array =[];
    for(let i=0; i< group_of_names.length; i++){
        if(group_of_names[i][0]== 'B'){
            new_array.push(group_of_names[i])
        }
    }
    return new_array
};
console.log(b_names_2())

//.reduce()
const nums = [2,4,6,8,10]
let nums_reduce = nums.reduce((accumulator, current_num) => {
    return accumulator + current_num
})

// long version
let counter = 6
for(let i = 0; i < nums.length; i++){
    counter += nums[i]
}
console.log(counter)

// .filter()
let b_names_3= group_of_names.filter(element => element[0] == 'B');

console.log(b_names_3)

//Array methofs with string values: .join(), .slice(), .search(), .splice()
console.log(group_of_names.join("/"))

console.log(group_of_names.slice(0,3)) // group_of_names[0:3]

// .splice()
let captured_val = group_of_names.splice(0, 1, 'Feddie')
console.log(`This value was removed from the list ${captured_val}`)
console.log(group_of_names)

// HW #2
let replaceGoku = (a_list) => {
    for (let i = 0; i < a_list.length; i++){
        if(i % 2 ==0){
            a_list.splice(i, 1, 'Goku')
        }
    }
    return a_list
}

console.log(replaceGoku(group_of_names))

// using .search() and .slice() on array values
console.log(group_of_names[0].search('G')) // index = 0

// string.slice()
console.log(group_of_names[1].slice(0,1)) // B





//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, 
loops through the list and checks that the current name is in the string passed in. 
The output should be:"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

let findWords = (dog_string, dog_names) => {
    for (let i = 0; i < dog_names.length; i++) {
        if (dog_string.includes(dog_string[i])) {
            return "Matched dog_name"
        }
    }
    return "No Matches"
};

console.log(findWords(dog_string, dog_names))


//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.


*/

given_arr == [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) =>{
    let new_arr = []
    for(let i = 0; i < given_arr.length; i++){
        if((arr[i]*2)<=50){
            new_arr.push(arr[i])
        }
    } return new_arr
}
console.log(replaceEvens(given_arr))

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...



// CODEWARS HW
https://www.codewars.com/kata/551b4501ac0447318f0009cd/solutions/javascript

function booleanToString(b){
    return b.toString();
  }


  https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
  function sum (numbers) {
    "use strict";
    return  numbers.reduce((res,v) => res+v,0);
};




























