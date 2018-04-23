'use strict';


const $ = require('jquery');


let sayHello = greeting => console.log(greeting);
    sayHello('Hello');


$('body').append(
    '<h1> Click here</h1><br><div>Hit it</div>');

$('h1').css(
    'text-allign', 'center'

);

$(document).keyup(function(event){
    alert(event.keyCode);
});

$('body').css('background-color', 'tan');


$(document).ready(function(){
    $("div").click(function(){
        $("h1").css("color", "red");
    });
});


