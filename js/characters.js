'use strict';

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
        console. log (character.type+' took '+ num + ' Damage you now have '+ (this.healthPoints = this.healthPoints -= num)+ ' HP')
    },
    passiveHeal:function (){
        console.log(this.type+ ' has healed '+ this.healingPoints + ' HP '+this.type+' now has '+(this.healthPoints = this.healthPoints += this.healingPoints)+ ' HP using Passive Heal!')
    }
}
// console.log(charcter.healthPoints);
character.damage(3);
// console.log(charcter.healthPoints);
character.damage(4);
// console.log(charcter.healthPoints);
character.passiveHeal();
// console.log(charcter.healthPoints);


// damage:function (){
//     this.healthPoints -= 1
// }

// charcter.catchPhrase('I am Mage');

var charcter2 ={
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
        console. log ( charcter2.type+' took '+ num + ' Damage you now have '+ (this.healthPoints = this.healthPoints -= num)+ ' HP')
    },

}

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

}
// NoName is an experimental character that is not going to have access to the game unless you enter a cheat code.

// noName.damage(4)
// noName.tacoHeal(2)

// function damageOutPut(){
//     if
// }
//if the attack var is true use attack else wait


var characters = [character,charcter2,noName]

characters.forEach(function (char) {
    if (char.healthPoints <= 0) {
        alert('GAME OVER ' + char.type + ' DIED')
    }
})



