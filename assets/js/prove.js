/* my array */
const authorizedMail = ['fabioPacifici@gmail.com', 'ArturMamedov@gmail.com', 'GiulianoGostinfini@libero.it'];
const userInput = document.getElementById("user_input");
let userFound = false;

const accessStatus = document.getElementById("Access_status");

document.getElementById("my_form").addEventListener('submit', function (e) {
  e.preventDefault();
  console.log("sono qui")

  const userInputCheck = userInput.value;
  console.log(userInputCheck);

  for (index = 0; index < authorizedMail.length; index++) {
    if (userInputCheck == authorizedMail[index]) {
      console.log("access in progress...");
      userFound = true;

      break;
    }
    else {
      console.log("incorrect mail, please start again");
    }
  }

  /* schermata personalizzata per l'user  */
  if (userFound = true && userInputCheck === 'fabioPacifici@gmail.com') {
    let myAccess = document.createElement('h5');
    let myImage = document.createElement('img');
    myAccess.innerHTML = "Welcome back Fabio pacifici!";
    myImage.src = "./assets/img/this_is_fabio.png";

    accessStatus.appendChild(myAccess);
    accessStatus.appendChild(myImage);


    let myFormRemove = document.getElementById("my_form");
    myFormRemove.remove();
  }
}
)

/* esercizio 2 */

function rollTheDice() {
  let diceNum1 = document.getElementById("dice1");
  let diceNum2 = document.getElementById("dice2");

  /* add gif animation */

  diceNum2.setAttribute("src", "./assets/img/diceroll.gif")

  diceNum1.classList.add("dynamic-image");
  diceNum2.classList.add("dynamic-image");

  let result = document.querySelector('h3');
  result.innerHTML = ""
  setTimeout(() => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    /* adjust dynamic and static imgs */
    diceNum1.style.transform = "scale(1)";
    diceNum2.style.transform = "scale(1)";

    diceNum1.setAttribute('src', './assets/img/dice' + randomNumber1 + '.png');
    diceNum2.setAttribute('src', './assets/img/dice' + randomNumber2 + '.png');

    //determine the winner
    if (randomNumber1 === randomNumber2) {
      result.innerHTML = "Draw!"
    }
    else if (randomNumber1 < randomNumber2) {
      result.innerHTML = (" Player 2 WINS!");
    }
    else {
      result.innerHTML = (" Player 1 WINS!");
    }
  }, 2500);
}