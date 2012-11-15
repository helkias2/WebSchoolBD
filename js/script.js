/* Author: Asif Chowdhury
 * 
 */

$( "li.layout-changer-2column" ).click(function() {
    $("div#c1").toggleClass( "hide");
    $("div#c2").toggleClass( "full");
});

$( "li.layout-changer-1column" ).click(function() {
    $("div#right").toggleClass( "hide");
    $("div#left").toggleClass( "full");
});

$( "li.layout-changer-displayall" ).click(function() {
    $("div#right").removeClass( "hide");
    $("div#left").removeClass("full");
    $("div#left").addClass("left");
});



















