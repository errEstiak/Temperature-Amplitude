'use strict'

//STATEMENT
//You work for a company buulding a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperatures amplitude. Keep in mind that sometimes there might be a sensor error."


//given data

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];



// SOLUTION
//Ask questions
//QUESTION 
//what is temperature amplitude? : it's the diff. between mix & max temp.
//how to find out min temp?
//how to find out max temp?
//what is sensor error

//TODO
//find out min temp
//find out max temp
//ignore the error
//find out amplitude

const calcTemperatureAmplitude = function(temps){    

    let min = temps[0];
    let max = temps[0];

    for(let i=0; i < temps.length; i++){
        let currTemp = temps[i];

        if(typeof currTemp !== "number") continue;

        if(currTemp < min){
            min = currTemp;
        }
        if(currTemp > max){
            max = currTemp;
        }
    }
    const amplitude = max - min;
    return amplitude;
}

console.log(temperatures);
console.log(calcTemperatureAmplitude(temperatures));


//PROBLEM 2
// STATEMENT
// instead of one array now the function will receive 2 arrays & all other functionalities will be same



// SOLUTION
// QUESTION
// can a function receive 2 arrays together? : yes

//TODO
//merge two arrays

const newCalcTemperatureAmplitude = function(t1, t2){

    let temps = t1.concat(t2)
    console.log(temps);

    let min = temps[0];
    let max = temps[0];

    for(let i=0; i < temps.length; i++){
        let currTemp = temps[i];

        if(typeof currTemp !== "number") continue;

        if(currTemp < min){
            min = currTemp;
        }
        if(currTemp > max){
            max = currTemp;
        }
    }
    const amplitude = max - min;
    return amplitude;
}

console.log(newCalcTemperatureAmplitude([2,3,4], [5,6,7]));