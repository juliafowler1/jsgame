"use strict";
let game = prompt("Do you want to play?");

if (game === "yes" || "Yes") {
    prompt("Ok, what's your name?");
}
else {
    alert("We'll play another time.");
}
let wins = 0;
let myHp = 40;
let grantHp = 10;

//while loop
//randomly takes away 1-2 health points from each player
while (myHp <= 40) {
    myHp = myHp - Math.floor(Math.random() * 2 + 1);
    console.log(`Julia's health is ${myHp}`);

    (grantHp <= 10)
    grantHp = grantHp - Math.floor(Math.random() * 2 + 1); {
        console.log(`Grant's health is ${grantHp}`);
    }
    //if my health goes below zero, I lose
    if (myHp <= 0) {
        console.log("Julia loses, game over");
        break;
    }
    //if Grants health goes below zero, I gain a win and his health is set back to 10
    if (grantHp <= 0) {
        wins++; grantHp = 10;
        console.log("Julia gains one win!")
    }
    //if I have more than 3 wins then I win the game
    if (wins >= 3) {
        console.log("Julia is the winner!");
        break;
    }

    //if my health is less than or equal to zero, Grant wins
    else if (myHp <= 0) {
        console.log("Game over, Grant wins!");
    }


}

