
// var currentDay is equal to todays date (day,month,year)
var currentDay = moment().format("dddd, MMMM Do YYYY ");
//displays currentDay in the html
$("#currentDay").text(currentDay);
//var current hour is equal to the current hour of today. in military time 
var currentHour = moment().format("HH"); {
    console.log(currentHour);
}
//getlocalStorage is a function that can be called to save input field to local storage
getlocalStorage();
//using jquery syntax "color-block".each is a jquery function to match time with the appropriate css class
$(".color-block").each(function() {
    
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
  return
});
// for loop to listen for clicks in all of the buttons on the html then log the value of its previousElementSibling to the consoles local storage.
// let buttons = $(".saveBtn");
// for (let i = 0; i < buttons.length; ++i) {
//     buttons[i].addEventListener(function(event) {
//         var inputVal = buttons[i].previousElementSibling.value;
//         console.log('input:', inputVal);
//         var storageNum = i + 1;
//         localStorage.setItem('id-' + (storageNum) , inputVal);
//     })
// };
// this function was called previously: getLocalStorage is a for loop that goes through the newly created local storage and checks to see if its not null. then displays on html
function getlocalStorage() {
    for(var i =0; i<10; i++){
        var inputSave = localStorage.getItem("id-"+ i);
        if(inputSave!=null){
           $("input[id-" + i + "]").val(inputSave) 
        }
    }
}
$(".saveBtn").each(function(i){
    $(this).click(function(){
    var inputVal = ($(this).prev().val());
    var storageNum = i + 1;
    localStorage.setItem('id-' + (storageNum) , inputVal);
   
    })
})
