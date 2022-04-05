var jumbo = document.querySelector(".jumbotron");
var display3 = document.querySelector(".display-3");
var lead = document.querySelector(".lead");
var currentDay = document.querySelector("#currentDay");
var container = document.querySelector(".container");

var currentDay = moment().format("dddd, MMMM Do YYYY ");
$("#currentDay").text(currentDay);
var lead = moment().format()
var currentDay = moment().format()
var container = moment().format()

var currentHour = (new Date()).getHours();
$('.row my-row')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour && val < currentHour + 6){
      $(this).css('.past');
    }else if(val < currentHour && val > currentHour-6){
      $(this).css('.present');
    }else if(val === currentHour){
      $(this).css('.future');
    }else{
      $(this).css('background-color','White');
    }
  });
