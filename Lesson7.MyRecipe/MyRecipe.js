// JavaScript File

/*
Program Name: Recipe Display Application
Author: Kyle McWilliams
Date: April 6, 2018
Filename: script.js
*/

/* global $ */

//displays the next element after the current target


function display(event) {
   $(event.currentTarget).next().fadeIn("slow");

}//end of display

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "red");
 }, function(){
 $(this).css("background-color", "white");
});