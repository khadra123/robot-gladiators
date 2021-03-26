// This is the fight function that starts the game.
var fight = function(){
    window.alert("Welcome to the Robot Gladiators");
};

fight();

//Player information
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerAttack, playerHealth, playerName, playerMoney);

//Prompts the user to choose a condition.
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ")
console.log(promptFight);

//Enemy information 
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

//Conditions from user input in function promptFight
if (promptFight === "fight" || promptFight==="FIGHT" || promptFight==="Fight") {
    enemyHealth = enemyHealth - playerAttack;
    console.log( playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining.");

    if (enemyHealth <= 0){
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has "+ enemyHealth + " health left.");
    }

    playerHealth = playerHealth -enemyAttack;
    console.log(enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining.");

    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has "+ playerHealth + " health left.");
    }
}

else if (promptFight === "Skip" || promptFight==="SKIP" || promptFight==="skip"){
    var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

    if (confirmSkip){
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney -2;
    }
    else{
        fight();
    }
}

else{
    window.alert("You need to choose a valid option. Try again! ")
}



