//Player information
var playerInfo = {
    name: window.prompt("What is your Robot Name?"),
    health: 100,
    attack: 10,
    money: 10
};

//Enemy information as an array of objects
var enemyInfo = [
    {
        name: "Robert",
        attack: 12
    },
    {
        name: "Amy",
        attack: 13
    },
    {
        name: "Robo Trumble",
        attack: 14
    }
]

// This is the fight function that starts the game.
var fight = function(enemy){ 
    
    while (enemy.health > 0 && playerInfo.Health > 0){

        //Prompts the user to choose a condition.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

         //if the player chooses to skip and stop the loop
        if (promptFight === "Skip" || promptFight==="SKIP" || promptFight==="skip"){
            var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
                
            if (confirmSkip){
                window.alert(playerInfo.Name + " has decided to skip this fight. Goodbye!");
                playerInfo.Money = Math.max(0, playerInfo.Money - 10);
                console.log("playerMoney", playerInfo.Money);
                break;
            }
        }

        //if player chooses to fight
        if (promptFight === "fight" || promptFight==="FIGHT" || promptFight==="Fight") {
            //Updates health based on attack damage
            var damage = randomNumber(playerInfo.Attack - 3, playerInfo.Attack);
            console.log(damage);
            enemy.health = Math.max(0, enemy.health - damage);
            console.log(enemy.health);
            console.log(playerInfo.Attack);

            console.log( playerInfo.Name + " attacked " + enemy.name + " now has " + enemy.health + " health remaining.");
            
            //Checks enemy.health 
            if (enemy.health <= 0){
                window.alert(enemy.name + " has died!");
                playerInfo.Money = playerInfo.Money + 20;
                break;
            }
            else {
                window.alert(enemy.name + " still has "+ enemy.health + " health left.");
            }
            
            //removes playerhealth from enemy.attack and returns the largest number
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.Health = Math.max(0, playerInfo.Health - damage);
            //console.log(playerHealth);

            console.log(enemy.name + " attacked " + playerInfo.Name + " now has " + playerInfo.Health + " health remaining.");
        
            //checks player's health
            if (playerInfo.Health <= 0){
                window.alert(playerInfo.Name + " has died!");
                break;
            }
            else {
                window.alert(playerInfo.Name + " still has "+ playerInfo.Health + " health left.");
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

    playerInfo.Health = 100;
    playerInfo.Attack = 10;
    playerInfo.Money = 20;

    //runs the fight function to start the game by inputting it into a loop allowing the player to face multiple enemies
    for (var i=0; i < enemyInfo.length; i++){

        if (playerInfo.Health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i+1) );

            var pickedEnemyObj = enemyInfo[i];

            //Resets enemy.health so that the next bot fights to any number between 0-59
            pickedEnemyObj.health = randomNumber(40, 60);

            //pass pickenemy.name variable's value into the fight function, where it will assume the value of the next enemy name
            fight(pickedEnemyObj);

            //shop option if the enemy isn't the last enemy to be faced
            if (i < enemyInfo.length -1 && playerInfo.Health > 0){
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
    if (playerInfo.Health > 0){
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

            if (playerInfo.Money >= 7){
                playerInfo.Health = playerInfo.Health + 20;
                playerInfo.Money = playerInfo.Money - 7;
            }
            else{
                window.alert("You do not have enough money!");
            }
            break;
        
        case "UPGRADE":    
        case "upgrade":
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            if (playerInfo.Money >= 7){
                playerInfo.Attack = playerInfo.Attack + 6;
                playerInfo.Money = playerInfo.Money - 7;
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

