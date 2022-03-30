var text = ["@#%!#$%!#%&!&!&&!&!7", "@#$@#$@^@^@$#$@^&%^&*&%^#", "!@#$#%&$%*#$@@#@%&#$&#","K!@#ONAM!@#$@#"];
var counter = 0;
var elem = document.getElementById("lol");
var inst = setInterval(change, 40);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}
function konamiCode(fn) {
    var input = "";
    var cheatCode = "3838404037393739666513";
    $(document).keydown(function(e) { //this functions is stating that if input is correct to run but if not reset to empty string
        input += e.keyCode;
        if (input.indexOf(cheatCode) !== -1) {
            fn();
            input = "";
        }
    });
}
$(document).ready(function() {
    konamiCode(function() {
        $('#noname').html(nonamehtml());
    });
});

function nonamehtml(){
   return  '<a href="front-page.html">'+'<img  src="/textures/noname.png">'+'</a>'
}
