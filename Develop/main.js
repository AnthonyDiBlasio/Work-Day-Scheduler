var jumbo =$(".jumbotron");
var display3 = $(".display-3");
var lead = $(".lead");
var currentDay = $("#currentDay");
var container = $(".container");
var textarea = $(".textarea");
var past= $(".past");
var present= $(".present");
var future= $(".future");
var timeblock = $(".time-block");

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
        $(this).click(function(){
            $(this).append("<input>");
        });
    } else if (currentHour > time) {
        $(this).removeClass("future");
        $(this).addClass("past");
        
  
  
    
    }
  
});
let buttons = document.querySelectorAll(".saveBtn")
for (let i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', function(event) {
        var inputVal = buttons[i].previousElementSibling.value;
        console.log('input:', inputVal);
        var Inum = i + 1;
        localStorage.setItem('id-' + (i + 1) , inputVal);
    })
};
function getDate() {
    for(var i =0; i<10; i++){
        var itemSave = localStorage.getItem("id-"+ i);
        if(itemSave!=null){
            document.querySelector("input[id-" + i + "]").value = itemSave
        }
    }
}
getDate();