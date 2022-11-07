


// if.else statement with expression
// testing whether a person is a minor 
const age = 30;
const newAge = 12;

// true test case
if (age > 21) {
    console.log(`${age}! Congrats! you're old enough!`); /* testing for true*/
} else console.log(`you are ${((age - 20)*-1)} year(s) too young.`); /* testing for false*/

// false test case
if (newAge > 21) {
    console.log(`${newAge}! Congrats! you're old enough!`); /* testing for true*/
} else console.log(`you are ${((newAge - 20)*-1)} year(s) too young.`); /* testing for false*/
console.log("");




// if.else statement with sring
// testing if const contains a specific character
const newPassWord = 'p@ssword';
const passWord = 'password';

// false test case 
if (passWord.includes('@')) {
    console.log("found it!")
} else console.log("'@' is not here!");

// true test case 
if (newPassWord.includes('@')) {
    console.log("found it!")
} else console.log("'@' is not here!");
console.log("");



// if.elseif.else statement w/ a string 
// testing if password length is long enough to be considered strong 
const weakPassword = 'pass'
const strongPassword = 'loK0t8k1'
const realStrongPassword = 'p@ssword3758'

// test case 1
if (weakPassword.length <= 4) {
    console.log(`${weakPassword} is too weak.`)
}

// tese case 2
if (strongPassword.length <= 7) {
    console.log(`${strongPassword} is too weak.`)
} else if ((strongPassword.length > 7)) {
    console.log(`${strongPassword} is strong enough.`)
}

// tese case 3
// I learned a really important lesson here:
// I was expecting console.log(`${realStrongPassword} is godly strong.`)
// to return, but it didnt becasue else if ((realStrongPassword.length >= 8))
// returned as true and that completed my test. 
// ALso, in the future, I should test for true first and then false. 
// I think it makes more sense to code for what I want... 
// and not what I dont want. 
if (realStrongPassword.length <= 4) {
    console.log(`${realStrongPassword} is too weak.`)
} else if ((realStrongPassword.length >= 8)) {
    console.log(`${realStrongPassword} is strong enough.`)
} else if (realStrongPassword.length >= 12) {
    console.log(`${realStrongPassword} is godly strong.`)   
} else console.log('why didn"t you enter a password?');

