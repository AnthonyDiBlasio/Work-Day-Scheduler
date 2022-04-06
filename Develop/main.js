var jumbo =$(".jumbotron");
var display3 = $(".display-3");
var lead = $(".lead");
var currentDay = $("#currentDay");
var container = $(".container");
var textarea = $(".textarea");
var past= $(".past");
var present= $(".present");
var future= $(".future");

var currentDay = moment().format("dddd, MMMM Do YYYY ");
$("#currentDay").text(currentDay);
var currentHour = moment().format("HH"); {
    console.log(currentHour);
}

$(".time-block").each(function() {
    
    let time = $(this).attr("id");
    if (currentHour == time) {
        $(this).addClass("present");
    } else if (currentHour < time) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > time) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});