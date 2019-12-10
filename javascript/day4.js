//day 4 part 1

//You arrive at the Venus fuel depot only to discover it's protected by a password. The Elves had written the password on a sticky note, but someone threw it out.
//
//However, they do remember a few key facts about the password:
//
//It is a six-digit number.
//The value is within the range given in your puzzle input.
//Two adjacent digits are the same (like 22 in 122345).
//Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
//Other than the range rule, the following are true:
//
//111111 meets these criteria (double 11, never decreases).
//223450 does not meet these criteria (decreasing pair of digits 50).
//123789 does not meet these criteria (no double).
//How many different passwords within the range given in your puzzle input meet these criteria?

//function to find if value has any two matching digits, return true or false 
//twoMatchingDigits = (number) => {
//    let outcome = false;
//    let newNumber = number.toString();
//    for(let i = 0; i < newNumber.length; i++){
//        if(newNumber.charAt(i) === newNumber.charAt(i+1)){
//            outcome = true
//            break
//        }
//    }
//    return outcome
//}

//function to find if value only gets larger or stays the same, return true or false 
sameOrIncreasing = (number) => {
    let outcome = false;
    let lastNumber = 0;
    let newNumber = (""+number).split("").map(Number) 
    for(let i = 0; i < newNumber.length; i++){
        if(newNumber[i] >= lastNumber){
            lastNumber = newNumber[i];
            outcome = true;
        } else {
            outcome = false;
            break;
        }
    }
    return outcome;
}

//loop through every number in the range and run the two functions for each one, push into new array every number that meets the criteria, return the length of that array - AND BOOM!

//range = 171309-643603

getPasswords = () => {
    let passwords = [];
    for(let i = 171309; i < 643603; i++){
        if(twoMatchingDigits(i) === true && sameOrIncreasing(i) === true){
            passwords.push(i);
        }
    }
    console.log(passwords.length);
}

//getPasswords(); //1625

//Part 2 

//An Elf just remembered one more important detail: the two adjacent matching digits are not part of a larger group of matching digits.

//basically the two matching digits cannot be a part of more than two matching digits, but as long as there are one set of two matching, its okay if there the other three digits match also

//112233 meets these criteria because the digits never decrease and all repeated digits are exactly two digits long.
//123444 no longer meets the criteria (the repeated 44 is part of a larger group of 444).
//111122 meets the criteria (even though 1 is repeated more than twice, it still contains a double 22).

threeMatchingDigits = (number) => {
    let outcome = false;
    let newNumber = number.toString();
    for(let i = 0; i < newNumber.length; i++){
        if(newNumber.charAt(i) === newNumber.charAt(i+1)){
            outcome = true
            break
        }
    }
    //if it gets to this point it means there are two matching digits
    if(outcome === true){
        //stuff
    }
}

console.log(threeMatchingDigits(112233));
console.log(threeMatchingDigits(123444));
console.log(threeMatchingDigits(111122));

//sees how many times a char appears in a string, returns the number
let test = "1112233"
console.log(test.replace(/[^1]/g, "").length);



