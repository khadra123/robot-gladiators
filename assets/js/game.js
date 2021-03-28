//Player information
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Enemy information 
var enemyNames = ["Roberto", "Amy", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// This is the fight function that starts the game.
var fight = function(enemyName){
    window.alert("Welcome to the Robot Gladiators");

    //Prompts the user to choose a condition.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ")
    console.log(promptFight);

    //if player chooses to fight
    if (promptFight === "fight" || promptFight==="FIGHT" || promptFight==="Fight") {
        //reduces enemyhealth from playerattack
        enemyHealth = enemyHealth - playerAttack;
        console.log( playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        //Checks enemyhealth 
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has "+ enemyHealth + " health left.");
        }
        
        //removes playerhealth from enemyattack
        playerHealth = playerHealth -enemyAttack;
        console.log(enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining.");
    
        //checks player's health
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has "+ playerHealth + " health left.");
        }
    }
    
    //if the player chooses to skip
    else if (promptFight === "Skip" || promptFight==="SKIP" || promptFight==="skip"){
        var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
    
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else{
            fight();
        }
    }
    
    //if player inputs incorrect value
    else{
        window.alert("You need to choose a valid option. Try again! ")
    }
};

//runs the fight function to start the game by inputting it into a loop allowing the player to face multiple enemies
for (var i=0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}






