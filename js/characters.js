'use strict';
// this page is going to have all of the javascript that is required  to make the turn based part
//of the game. first I will be making the characters that have objects then make the page
//functional by adding jquery to make them fight.

// CHECK LIST ====================
// 1) MAKE CHARACTERS INTO OBJECTS - DONE
// 2) MAKE METHOD FOR DAMAGE TO CHARACTER - DONE
// 3) MAKE AN ALERT THAT THE GAME IS OVER IF ONE OF THE CHARACTERS DIES - DONE
// 4) WRITE JQUERY THAT WHEN EVER YOU CLICK THE CHARACTER (BOX) IT DOES DAMAGE - DONE
// 5) FIX NUMBER 3 BECAUSE ALERT NO LONGER WORKS - DONE
// 6) ADD A RESET BUTTON TO RESET THE PAGE AFTER THE GAME IS OVER - DONE
// 7) ADD A FOR LOOP TO THE DMG FUNCTION AT SO PLAYERS CAN HAVE A RANDOM FIGHT DMG OUTPUT OF 1-3 -DONE
// 8)ALIGN ALL PICTURES AND BUTTONS WHERE I WANT THEM AND ADD CSS.


var character ={
    type: 'Mage',
    healthPoints: 10,
    catchPhrase: function (input){
        console.log(input)
    },
    movementSpeed: 250,
    abilities: [{
        fireball: 5,
        heal: 4,
        sprint: .5 ,
    }],
    healingPoints: 2,
    damage:function (num){
         return (character.type+' took '+ num + ' Damage you now have '+ (this.healthPoints = this.healthPoints -= num)+ ' HP');
    },
    passiveHeal:function (){
        return (this.type+ ' has healed '+ this.healingPoints + ' HP '+this.type+' now has '+(this.healthPoints = this.healthPoints += this.healingPoints)+ ' HP using Passive Heal!');
    }
};


// below is console log test to show that if the damage method inside the object is used it will show up in the console. However I need a way to make it document on the screen.


// console.log(charcter.healthPoints);
// character.damage(3);
// console.log(charcter.healthPoints);
// character.damage(4);
// console.log(charcter.healthPoints);
// character.passiveHeal();
// console.log(charcter.healthPoints);
// character.damage(8)

// damage:function (){
//     this.healthPoints -= 1
// }

// charcter.catchPhrase('I am Mage');

var character2 ={
    type: 'Ghost',
    healthPoints: 10,
    movementSpeed: 250,
    catchPhrase: function (input){
        console.log(input);
    },
    abilities: [{
        phasing: 0.5,
        basicAttack: 1,
        evade: 3,
    }],
    damage:function (num){
        return ( character2.type+' took '+ num + ' Damage you now have '+ (this.healthPoints = this.healthPoints -= num)+ ' HP');
    },

};




var noName ={
    type: 'Macho Man',
    healthPoints: Math.floor(Math.random()* 100)+ 1,
    movementSpeed: Math.floor(Math.random() * 1000)+ 1,
    abilities:[{
        pinataStick: Math.floor(Math.random() * 10)+ 1,
        pinataStickLight: Math.floor(Math.random() * 5)+1,
    }],
    damage:function (num){
        console. log ( noName.type+' took '+ num + ' Damage you now have '+ (this.healthPoints = this.healthPoints -= num)+ ' HP')
    },
    tacoHeal:function (){
        console.log(this.type+ ' has healed '+ this.healingPoints + ' HP '+this.type+' now has '+(this.healthPoints = this.healthPoints += this.healingPoints)+ ' HP using Passive Heal!')
    }

};
// NoName is an experimental character that is not going to have access to the game unless you enter a cheat code.

// noName.damage(4)
// noName.tacoHeal(2)

// function damageOutPut(){
//     if
// }
//if the attack var is true use attack else wait


// the code below works when the 'mage' red square is clicked and alerts when "mage" dies.
$('.box1').click(function (){
    var dmg = Math.floor(Math.random() * 4);
    if  ($('.dialog').html(character.damage(dmg))){
        gameOver();
    }
});



//the code below is functional and counts down when the code is pressed which in turn gets an alert
//when "ghost" dies
$('.box2').click(function (){
    var dmg = Math.floor(Math.random() * 4);
   if  ($('.dialog2').html(character2.damage(dmg))){
       gameOver();
   }
});


$('.play-again').click(function() {
    location.reload();
});



var characters = [character,character2,noName];

function gameOver(){
    characters.forEach(function (char) {
        if (char.healthPoints <= 0) {
            alert('GAME OVER ' + char.type + ' DIED')
        }
    });
}

