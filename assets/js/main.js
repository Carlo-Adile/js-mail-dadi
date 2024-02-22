/* esercizio 1 */

/* let userInput = prompt("enter your email");

const authorizedMail = ['fabioPacifici@gmail.com', 'ArturMamedov@gmail.com', 'GiulianoGostinfini@libero.it'];

for(index =0; index < authorizedMail.length; index++){
  if(userInput == authorizedMail[index]){
    console.log("access in progress...");
    break;
  }
  else{
    console.log("incorrect mail, please start again");
  }
} */

/* esercizio 2 */

function getRandomInt(max) {
  return Math.floor(Math.random() * max + 1);
}

const myRoll = getRandomInt(6);
console.log(myRoll);

const cpuRoll = getRandomInt(6);
console.log(cpuRoll);

let myPoint = 0;
let cpuPoint = 0;

if(myRoll > cpuRoll){
  console.log("you won!");
  myPoint++;
  
}
else if(myRoll < cpuRoll){
  console.log("you lost!");
  cpuPoint ++;
}
else{
  console.log("draw, try again if you dare!");
}

console.log(myPoint);
console.log(cpuPoint);

