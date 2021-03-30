//Player information
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 20;

//Enemy information 
var enemyNames = ["Roberto", "Amy", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// This is the fight function that starts the game.
var fight = function(enemyName){ 

    while (enemyHealth > 0 && playerHealth > 0){

        //Prompts the user to choose a condition.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

         //if the player chooses to skip and stop the loop
        if (promptFight === "Skip" || promptFight==="SKIP" || promptFight==="skip"){
            var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
                
            if (confirmSkip){
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //if player chooses to fight
        if (promptFight === "fight" || promptFight==="FIGHT" || promptFight==="Fight") {
            //Updates health based on attack damage
            var damage = randomNumber(playerAttack - 3, playerAttack);
            console.log(damage);
            enemyHealth = Math.max(0, enemyHealth - damage);
            console.log(enemyHealth);
            console.log(playerAttack);

            console.log( playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining.");
            
            //Checks enemyhealth 
            if (enemyHealth <= 0){
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            }
            else {
                window.alert(enemyName + " still has "+ enemyHealth + " health left.");
            }
            
            //removes playerhealth from enemyattack and returns the largest number
            var damage = randomNumber(enemyAttack - 3, enemyAttack);
            playerHealth = Math.max(0, playerHealth - damage);
            //console.log(playerHealth);

            console.log(enemyName + " attacked " + playerName + " now has " + playerHealth + " health remaining.");
        
            //checks player's health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has "+ playerHealth + " health left.");
            }
        }
        
        //if player inputs incorrect value
        else{
            window.alert("You need to choose a valid option. Try again! ")
        }
    }

};

//Start Game function
var startGame = function() {
    //debugger;

    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 20;

    //runs the fight function to start the game by inputting it into a loop allowing the player to face multiple enemies
    for (var i=0; i < enemyNames.length; i++){

        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1) );

            var pickedEnemyName = enemyNames[i];

            //Resets enemyhealth so that the next bot fights to any number between 0-59
            enemyHealth=randomNumber(40, 60);

            //pass pickenemyname variable's value into the fight function, where it will assume the value of the next enemy name
            fight(pickedEnemyName);

            //shop option if the enemy isn't the last enemy to be faced
            if (i < enemyNames.length -1 && playerHealth > 0){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                if (storeConfirm){
                    shop();
                }
                
            }
        }

        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }        
    }  

    //after loop ends, player is either out of health or enemies to fight, so run end game conditions
    endGame();
};

//End Game function
var endGame = function (){

    //if playerHealth is above 0 then the player wins
    if (playerHealth > 0){
        window.alert("The game has now ended. Let's see how you did!");
    }
    
    else{
        window.alert("You've lost your robot in battle!");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart game
        startGame ();
    }

    else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

}

//shop function
var shop = function(){
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack or LEAVE the store. Please enter one: 'REFILL' , 'UPGRADE' , or 'LEAVE' to make a choice."); 

    switch (shopOptionPrompt){

        //both cases cover both cases in which a player will write refill, upgrade or leave
        case "REFILL":
        case "refill":
            window.alert("Refilling player's health by 20 for 7 dollars.");

            if (playerMoney >= 7){
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You do not have enough money!");
            }
            break;
        
        case "UPGRADE":    
        case "upgrade":
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            if (playerMoney >= 7){
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You do not have enough money!");
            }
            break;
        
        case "LEAVE":    
        case "leave":
            window.alert("Leaving the store.");
            break;

        default:
            window.alert("You did not pick a valid option. Try again!");
            shop();
            break;

    }
}

var randomNumber =function(min, max){
    var value = Math.floor(Math.random() *(max - min + 1));

    return value;
}

//this starts the startgame function without it the game won't start
startGame ();

