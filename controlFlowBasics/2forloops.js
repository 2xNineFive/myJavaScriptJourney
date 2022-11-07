


// for Loops

// example 1: simple loop
// let i = 0; is initializing i
// i < 5; is a condition
// i++ is an expression

for (let i = 0; i < 5; i++) {
    console.log('in loop:', i);
} console.log('loop is finished');


console.log("")

// example 2: looping through an array
// names is an array

const names = ['Frankie', 'Kaos', 'Percy'];
for (let i = 0; i < names.length; i++) {
    console.log(i); /* This returns the index of i*/
    console.log(names[i]); /* This returns the value of i at index i*/
    let html = ` <div>${names[i]}</div>`;
    console.log(html); /* This returns an html elemement with the value at index i at index i*/
} console.log('loop is finished');


// summary
// I learned that looping is a useful technique for iterating through data. The return data can then be used
// for multipple purposes. 