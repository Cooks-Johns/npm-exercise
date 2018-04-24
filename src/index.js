'use strict';

const $ = require('jquery');
// const boootStrap = require('bootstrap-4.1.0');




let sayHello = greeting => console.log(greeting);
    sayHello('Hello');


$('body').append(
    '<h1> Click here</h1><br><div>Hit it</div>');

// $('body').append(
//     `<div class="btn-group">
//     <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     Action <span class="caret"></span>
//     </button>
//     <ul class="dropdown-menu">
//     <li><a href="#">Action</a></li>
//     <li><a href="www.google.com"><h2>First Place to Look if you have a Question</h2></a></li>
//     <li><a href="www.google.com""><h2>Second Place to Look if you have a Question</h2></a></li>
//     <li role="separator" class="divider"></li>
//     <li><a href="#">Separated link</a></li>
//     </ul>
//     </div>`);


$('h2').css(
    'text-allign', 'center'

);

$(document).keyup(function(event){
    $('body').append(event.keyCode);

});

$(document).keyup(function(event){
    $('body').append('input');

});

$(document).keyup(function(event){
    $('body').append(event.keyCode);

});

$('body').css(
    'background-color', 'tan',
    'font-size', '150px',
    'text-decoration', 'underline'

);


$(document).ready(function(){
    $("div").click(function(){
        $("h1").css("color", "red");
    });
});


$(document).ready(function(){
    $("button").click(function(){
        confirm('Are you sure about your selection')
    });
});

$(document).ready(function(){
    $("body").click(function(){
        $("div").show();
    });
});
//
