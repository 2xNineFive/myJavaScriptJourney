


// logical operators: AND -> &    and   OR -> ||
// AND = &
// OR = ||



// testing, w/ logical operator: &, 
// whether const >=12 & inclucedes '@'
let realStrongPassword = 'p@ssword3758'
// true test case 
if (realStrongPassword.length >= 12 & realStrongPassword.includes('@')) {
    console.log(`your password: ${realStrongPassword} is godly strong.`)  
} else console.log(`your password: ${realStrongPassword} is not godly strong.`);
console.log('');

realStrongPassword = 'password3758'
// else test case 
if (realStrongPassword.length >= 12 & realStrongPassword.includes('@')) {
    console.log(`your password: ${realStrongPassword} is godly strong.`)  
} else console.log(`your password: ${realStrongPassword} is not godly strong.`);
console.log('');
// this is to confirm the returns of each expression
console.log(realStrongPassword.length >= 12);
console.log(realStrongPassword.includes('@'));
console.log('');



// testing, w/ logical operator: ||, 
// to check if realStrongPassWord < 1 or
// if realStrongPassword contains 
realStrongPassword = 'p@ssword3758'
// if test case 
if (realStrongPassword.length < 1 || realStrongPassword.includes('@')) {
    console.log('at least one condition was true');
}
// this is to confirm the returns of each expression
console.log(realStrongPassword.length < 1);
console.log(realStrongPassword.includes('@'));
console.log('');

realStrongPassword = 'password3758'
// else test case 
if (realStrongPassword.length < 1 || realStrongPassword.includes('@')) {
    console.log('at least one condition was true');
} else console.log('neither expression was true');

// this is to confirm the returns of each expression
console.log(realStrongPassword.length < 1);
console.log(realStrongPassword.includes('@'));
console.log('');


// I am making sure that the password is actually strong by testing the password for common phrases. 
// A better iteration could be test for... I had an idea to use a loop to test for common phrases
// I also had an idea to test for common phrases with an API of common passwords? lol
// So back to my original idea: I could test for common phrases with || for each 

realStrongPassword = 'p@ssword3123'

if (realStrongPassword.startsWith('p@ss') & realStrongPassword.endsWith('123') & realStrongPassword.length <= 12) {
    console.log(`your password: ${realStrongPassword}, is easy to guess. try again.`);
} else console.log('congratulations. hackers don"t love you');