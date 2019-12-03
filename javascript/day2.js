// Day 2
// input[0] tells you to add or subtract, input[1] and input[2] tells you the index values to use, and input[4] tells you what index to put the outcome at

const opcode = [1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,6,27,2,27,13,31,1,10,31,35,1,10,35,39,2,39,6,43,1,43,5,47,2,10,47,51,1,5,51,55,1,55,13,59,1,59,9,63,2,9,63,67,1,6,67,71,1,71,13,75,1,75,10,79,1,5,79,83,1,10,83,87,1,5,87,91,1,91,9,95,2,13,95,99,1,5,99,103,2,103,9,107,1,5,107,111,2,111,9,115,1,115,6,119,2,13,119,123,1,123,5,127,1,127,9,131,1,131,10,135,1,13,135,139,2,9,139,143,1,5,143,147,1,13,147,151,1,151,2,155,1,10,155,0,99,2,14,0,0];

// first attempt
//let i = 0;
//let numtimes = 0
//do {
//    if(opcode[i] === 99){
//        console.log(numtimes + ' 99')
//        console.log('i is 99! the position at zero is: ' + opcode[0])
//        break;
//    } else if(opcode[i] === 1){
//        opcode[i + 3] = opcode[i + 1] + opcode[i + 2];
//        i = i + 4;
//        numtimes++
//        console.log(numtimes + ' 1')
//    } else if(opcode[i] === 2){
//        opcode[i + 3] = opcode[i + 2] * opcode[i + 1];
//        i = i + 4;
//        numtimes++
//        console.log(numtimes + ' 2')
//    } 
//} while(i != 99) 
    //for some reason it running twice at the 40th time, and stopping before running the 41th time, which is where the correct answer is. doesn't matter what value is in the 'while'

// working
for(let i = 0; i < opcode.length; i += 4){
    let starting = opcode[i];
    let num1 = opcode[i+1];
    let num2 = opcode[i+2];
    let outcome = opcode[i+3];

    if(starting === 1){
        opcode[outcome] = opcode[num1] + opcode[num2];
    } else if(starting === 2){
        opcode[outcome] = opcode[num1] * opcode[num2];
    } else if(starting === 99) {
        console.log(opcode[0]);
        break;
    }
}

// Part 2 from reddit

function Intcode(array,i){
  if (array[i] === 99){
    return array;
  }
  else if (array[i] === 1){
    var val1 = array[array[i+1]];
    var val2 = array[array[i+2]];
    array[array[i+3]] = val1 + val2;
    i += 4;
    Intcode(array,i);
  }
  else if (array[i] === 2){
    var val1 = array[array[i+1]];
    var val2 = array[array[i+2]];
    array[array[i+3]] = val1 * val2;
    i += 4;
    Intcode(array,i);
  }
  else console.log("Error!!");
}
 
var j;
var k;
 
for (j = 0; j < 100; j++){
  for (k = 0; k <100; k++){
    var Input = [1,j,k,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,9,23,1,23,6,27,2,27,13,31,1,10,31,35,1,10,35,39,2,39,6,43,1,43,5,47,2,10,47,51,1,5,51,55,1,55,13,59,1,59,9,63,2,9,63,67,1,6,67,71,1,71,13,75,1,75,10,79,1,5,79,83,1,10,83,87,1,5,87,91,1,91,9,95,2,13,95,99,1,5,99,103,2,103,9,107,1,5,107,111,2,111,9,115,1,115,6,119,2,13,119,123,1,123,5,127,1,127,9,131,1,131,10,135,1,13,135,139,2,9,139,143,1,5,143,147,1,13,147,151,1,151,2,155,1,10,155,0,99,2,14,0,0];
 
    Intcode(Input,0);
    if(Input[0] == 19690720){
      console.log (100*j + k);
      break;
    }
  }
}
