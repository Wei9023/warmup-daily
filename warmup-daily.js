'use strict';

//Array;
let arr = [1,2,3,4,5,6,7,8,9,10];

const forLoop = (arr) => {
    for(let i =0; i< arr.length; i++){
        console.log(arr[i]);
    }
}

const whileLoop = (arr) => {
    let i =0;
    while(i < arr.length){
        console.log(arr[i]);
    }
    i++;
}

const myMap =(arr) => {
    let newArray =[];
    for(let i = 0; i< arr.length; i++){
        let item =  arr[i] +1;
        newArray.push(item);
        return newArray;
    }
}

const myFilter = (arr) => {
    let newArray =[];
    for(let i = 0; i< arr.length; i++){
        if(item<5){
            newArray.push(item);
        }
        return newArray;
    }
}

const myReduce = (arr, callback, value) => {
    for(i=0; i< arr.length; i++){
        value = callback(value, list[i], i);
    }
    return value;
};

//Object
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people,stuff};

let newPeople = ['Garfield', ...people, 'Odie'];;
console.log(newPeople);
console.log(people);


const newStuff = {...stuff, cars: [...stuff.cars,'BMW']};
console.log(newStuff);
console.log(stuff);


let newState = {...stuff, cars: [...stuff.cars,'BMW'], people: ['Garfiled',...state.people, 'Odie']};

console.log(newState);
console.log(state);