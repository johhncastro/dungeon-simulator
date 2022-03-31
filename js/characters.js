'use strict';
//this page is going to have all of the javascript that is required  to make the turn based part
//of the game. first I will be making the characters that have objects then make the page
//functional by adding jquery to make them fight.

//TODO: CHECK LIST ====================
// 1) MAKE CHARACTERS INTO OBJECTS - DONE
// 2) MAKE METHOD FOR DAMAGE TO CHARACTER - DONE
// 3) MAKE AN ALERT THAT THE GAME IS OVER IF ONE OF THE CHARACTERS DIES - DONE
// 4) WRITE JQUERY THAT WHEN EVER YOU CLICK THE CHARACTER (BOX) IT DOES DAMAGE - DONE
// 5) FIX NUMBER 3 BECAUSE ALERT NO LONGER WORKS - DONE
// 6) ADD A RESET BUTTON TO RESET THE PAGE AFTER THE GAME IS OVER - DONE
// 7) ADD A FOR LOOP TO THE DMG FUNCTION AT SO PLAYERS CAN HAVE A RANDOM FIGHT DMG OUTPUT OF 1-3 -DONE
// 8) ALIGN ALL PICTURES AND BUTTONS WHERE I WANT THEM AND ADD CSS. - DONE
// 9) CHANGE SO THAT WHEN CHARACTER DIES IT ALERTS AND THE PLAY AGAIN BUTTON APPEARS
// 10) make all ability buttons work. -semi done
// 11) maybe find a way to change characters -not happening on pvp version def on pve tho
// 12) the turn based game could be pvp and could start possibly working on a pve version (most likely will)
// 13) lower case is cooler ;)
// 14) ADD INTERACTIVE HEALTH BAR - DONE
// 15) ADD ATTACK ANIMATION




//TODO: IMPORTANT NOTES !!!! ALL BELOW NOTES MUST BE FIXED !!!!!
// 1) health bar works however when the mage heals the health bar does not go up needs fixing
// in reference to the note above the heal method is now fixed.






// below is the 'mage' obj that has all attributes and skills some are in use others are not


const character ={
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
        return (this.type+ ' has healed '+ this.healingPoints + ' HP '+this.type+' now has '+(this.healthPoints = this.healthPoints += this.healingPoints)+ ' HP');
    },
    getHealth:function (){
        var html = ""
        if (this.healthPoints <= 0){
           html += "<img src='/health-textures/Health-0.gif'>"
        } if (this.healthPoints === 1){
           html += "<img src='/health-textures/Health-1.gif'>"
        } if (this.healthPoints === 2){
            html += "<img src='/health-textures/Health-2.gif'>"
        } if (this.healthPoints === 3){
            html += "<img src='/health-textures/Health-3.gif'>"
        } if (this.healthPoints === 4){
            html += "<img src='/health-textures/Health-4.png'>"
        } if (this.healthPoints === 5){
            html += "<img src='/health-textures/Health-5.png'>"
        } if (this.healthPoints === 6){
            html += "<img src='/health-textures/Health-6.png'>"
        } if (this.healthPoints === 7){
            html += "<img src='/health-textures/Health-7.png'>"
        } if (this.healthPoints === 8){
            html += "<img src='/health-textures/Health-8.png'>"
        } if (this.healthPoints === 9){
            html += "<img src='/health-textures/Health-9.png'>"
        } if (this.healthPoints >= 10){
            html += "<img src='/health-textures/Health-10.png'>"
        }
        return  html;
    },
    fireballAnimation: function (){
     return "<img src='/textures/Fireball.gif'>"
    },
    healAnimation: function (){
        return "<img src='/textures/mage-heal.gif'>"
    },
    resetHealAnimation: function (){
        return "<img src='/textures/mage-lg.png'>"
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


//below is the 'ghost' obj this has all abilities and attributes movement speed has no use currently

const character2 ={
    type: 'Ghost',
    healthPoints: 10,
    movementSpeed: 250,
    catchPhrase: function (input){
        console.log(input);
    },
    healingPoints: 1,
    abilities: [{
        phasing: 0.5,
        basicAttack: 1,
        evade: 3,
    }],
    damage:function (num){
        return ( character2.type+' took '+ num + ' Damage you now have '+ (this.healthPoints = this.healthPoints -= num)+ ' HP');
    },
    ghostHeal:function (){
        return (this.type+ ' has healed '+ this.healingPoints + ' HP '+this.type+' now has '+(this.healthPoints = this.healthPoints += this.healingPoints)+ ' HP');
    },
    slashAnimation: function (){
        // return window.setTimeout($('#attack').style.display="none",1000)
        return "<img src='/textures/slash.gif'>"
    },

    getHealth: function (){
        var html = ""
        if (this.healthPoints <= 0){
            html += "<img src='/health-textures/Health-0.gif'>"
        } if (this.healthPoints === 1){
            html += "<img src='/health-textures/Health-1.gif'>"
        } if (this.healthPoints === 2){
            html += "<img src='/health-textures/Health-2.gif'>"
        } if (this.healthPoints === 3){
            html += "<img src='/health-textures/Health-3.gif'>"
        } if (this.healthPoints === 4){
            html += "<img src='/health-textures/Health-4.png'>"
        } if (this.healthPoints === 5){
            html += "<img src='/health-textures/Health-5.png'>"
        } if (this.healthPoints === 6){
            html += "<img src='/health-textures/Health-6.png'>"
        } if (this.healthPoints === 7){
            html += "<img src='/health-textures/Health-7.png'>"
        } if (this.healthPoints === 8){
            html += "<img src='/health-textures/Health-8.png'>"
        } if (this.healthPoints === 9){
            html += "<img src='/health-textures/Health-9.png'>"
        } if (this.healthPoints >= 10){
            html += "<img src='/health-textures/Health-10.png'>"
        }
        return html;
    },


};


const darkKnight = {
    type: "dark knight",
    healthPoints: 10,
    damage:function (num) {
        return console.log(this.type + ' took ' + num + ' Damage and now has ' + (this.healthPoints = this.healthPoints -= num) + ' HP');
    },
    lightAttack: 2,
    heavyAttack:4,
    getHealth:function (){
        var html = ""
        if (this.healthPoints <= 0){
            html += "<img src='/health-textures/Health-0.gif'>"
        } if (this.healthPoints === 1){
            html += "<img src='/health-textures/Health-1.gif'>"
        } if (this.healthPoints === 2){
            html += "<img src='/health-textures/Health-2.gif'>"
        } if (this.healthPoints === 3){
            html += "<img src='/health-textures/Health-3.gif'>"
        } if (this.healthPoints === 4){
            html += "<img src='/health-textures/Health-4.png'>"
        } if (this.healthPoints === 5){
            html += "<img src='/health-textures/Health-5.png'>"
        } if (this.healthPoints === 6){
            html += "<img src='/health-textures/Health-6.png'>"
        } if (this.healthPoints === 7){
            html += "<img src='/health-textures/Health-7.png'>"
        } if (this.healthPoints === 8){
            html += "<img src='/health-textures/Health-8.png'>"
        } if (this.healthPoints === 9){
            html += "<img src='/health-textures/Health-9.png'>"
        } if (this.healthPoints >= 10){
            html += "<img src='/health-textures/Health-10.png'>"
        }
        return  html;
    },
}



/// !@##@%$#$%^@#$^#@$R!#$~@$%^#^#$%#!$%!#$&


const noName ={
    type: 'Macho Man',
    healthPoints: Math.floor(Math.random()* 100)+ 1,
    movementSpeed: Math.floor(Math.random() * 1000)+ 1,
    abilities:[{
        pinataStick: Math.floor(Math.random() * 10)+ 1,
        pinataStickLight: Math.floor(Math.random() * 5)+1,
    }],
    damage:function (num){
        console. log ( noName.type+' took '+ num + ' Damage and now has '+ (this.healthPoints = this.healthPoints -= num)+ ' HP')
    },
    tacoHeal:function (){
        console.log(this.type+ ' has healed '+ this.healingPoints + ' HP '+this.type+' now has '+(this.healthPoints = this.healthPoints += this.healingPoints)+ ' HP using Passive Heal!')
    }

};
// NoName is an experimental character that is not going to have access to the game unless you enter a cheat code *maybe.

// noName.damage(4)
// noName.tacoHeal(2)

// function damageOutPut(){
//     if
// }
//if the attack var is true use attack else wait

//function to reset attack img

// function timeoutReset(){
//     return ""
// }
// function timeoutTriggerReset(){
//     return  setTimeout(timeoutReset,1000);
// }




// the code below works when the 'Slash' is clicked and alerts when "mage" dies. this also is a button that
// will display to the dome how much dmg was delt and how much health the char has
// this is a ghost button

$('.box1').click(function (){
    var dmg = Math.floor(Math.random() * 4);
    if  ($('.dialog').html(character.damage(dmg))){
        //the game over function below alerts the page that one of the characters have died this is important else the char health will go negative forever.
        gameOver();
        // the code below makes the health bar interactive
        $(".mage-health").html(character.getHealth());
        $("#attack").html(character2.slashAnimation());
        // the below code will reset mages heal animation if it its in the process else his animation will keep running
        $("#mage").html(character.resetHealAnimation());
        attackTimeout();
    }
});


//this btn is the 'mage' passive heal this allows for 2 health points to regen.
$('.heal-btn').click(function (){
    //the below code is the passive heal method that is attached to the mage
    $('.dialog').html(character.passiveHeal());
    // the below code is used to get the health of the mage after the mage has healed
    $(".mage-health").html(character.getHealth());
    // the below animation will appear when heal btn is clicked
    $("#mage").html(character.healAnimation())
    healTimeout();
})

//this btn is the 'Ghost' heal this allows for 2 health points to regen.
$('.ghost-heal-btn').click(function (){
    //the below code is the passive heal method that is attached to the mage
    $('.dialog2').html(character2.ghostHeal());
    // the below code is used to get the health of the mage after the mage has healed
    $(".ghost-health").html(character2.getHealth());
    // the below code will reset mages heal animation if it its in the process else his animation will keep running
    $("#mage").html(character.resetHealAnimation());
})


// THIS IS THE FIREBALL BUTTON
//the code below is functional and counts down when the code is pressed which in turn gets an alert
//when "ghost" dies due to mage fireball attack
$('.box2').click(function (){
    var dmg = Math.floor(Math.random() * 4);
        $('.dialog2').html(character2.damage(dmg))
       //the game over function below alerts the page that one of the characters have died this is important else the char health will go negative forever.
       gameOver();
       //the code below makes the health bar interactive
       $(".ghost-health").html(character2.getHealth());
       $("#attack").html(character.fireballAnimation())
        attackTimeout();
    // the below code will reset mages heal animation if it its in the process else his animation will keep running
    $("#mage").html(character.resetHealAnimation());

});







$('#game-over').click(function() {
    location.reload();
});

// this is the array of all the characters on the
const characters = [character,character2,noName,darkKnight];

function gameOver(){
    characters.forEach(function (char) {
        if (char.healthPoints <= 0) {
            $("#game-over").html('<img src="/textures/game-over-animate.gif" style="position: absolute; width: 100%; top: 0px; height: 1000px" >')
        }
    });
}
function toggleZoomScreen() {
    document.body.style.zoom = "80%";
}
// toggleZoomScreen()





// the below code is a start for ai in the story page
// the below is only gonna be story mode code ONLY some above code will be used for the story but for the most part all functionality
// what this does is pick a random attack either light or heavy the light attack has a 75% chance to hit while the other heavy attack has a 25% chance to hit
// below is the list that needs to be finished for the ai
//todo: checklist ==============
// 1. make ai function that chooses random attack or uses heal potion (done)
// 2. make the ai work after the mage or whatever character has attacked this will probably involve some sort of set timeout still not too sure on how to get this to work the timeout function is kinda done
// 3. make it so when ai dies a next level icon appears. or a new character appears
// 4. make around 5 - 10 enemys before the boss
// 5. boss should be hard to kill around 20 hp
// 6  possiblly make a leveling system or add buffs
// 7 finsih game ez clap

const storyChars = [character]


let darkKnightAI = [];

darkKnightAI[0] = function(){
     console.log(character.damage(darkKnight.lightAttack));
     mageDies()
}
darkKnightAI[1] = function(){
     console.log(character.damage(darkKnight.lightAttack));
     mageDies()
}
darkKnightAI[2] = function(){
     console.log(character.damage(darkKnight.lightAttack));
     mageDies()
}
darkKnightAI[3] = function(){
     console.log(character.damage(darkKnight.lightAttack));
     mageDies()
}
darkKnightAI[4] = function(){
     console.log(character.damage(darkKnight.heavyAttack));
     mageDies()

}
// this function is a timeout trigger so that when the button to attack is clicked after 5 sec the ai will attack.


function timeoutTriggerDKAttack(){
    setTimeout(darkKnightRandomAttack,5000);
}
// this code below chooses a random attack or heal from the array above
function darkKnightRandomAttack(){
    let rand = parseInt(Math.random()*darkKnightAI.length);
    darkKnightAI[rand]();
}


// below are gonna most if not all TIMEOUT FUNCTIONS!

// this function is soooooo huge and important for the rest of this project I will need to refactor a bunch of code to make the attack or heal timeouts work but the fireball timeout works!!!!!
function resetAttack(){
    return "<img src='/textures/256x256.png'>"
}
function resetMage(){
    return "<img src='/textures/mage-lg.png'>"
}
function attackTimeout(){
    window.setTimeout("document.getElementById('attack').innerHTML = resetAttack();", 500)
}
function healTimeout(){
    window.setTimeout("document.getElementById('mage').innerHTML = resetMage();", 700)
}



// below is code for the ai to attack after 5 seconds of the button being clicked
$("#darkTest").click(function (){
    timeoutTriggerDKAttack();
});

$("#fireball-story").click(function (){
    var dmg = Math.floor(Math.random() * 5);
    darkKnight.damage(dmg);
    $("#attack").html(character.fireballAnimation())
    timeoutTriggerDKAttack();
    mageDies();
})


function mageDies(){
    storyChars.forEach(function (char) {
        if (char.healthPoints <= 0) {
            $("#game-over").html('<img src="/textures/game-over-animate.gif" style="position: absolute; width: 100%; top: 0px; height: 1000px" >')
        }
    });
}

// setTimeout(darkKnightRandomAttack,5000)
