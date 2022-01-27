// add sortable function to move input chunks around?
// add block function to block input field (ie: lunch/appt)?
let now = moment().hour();

function checkTime(now) {

  // if now < worktime set attribute to past
  // if now === worktime set attribute to present
  // if now > worktime set attribute to future
  // set interval to update more than 1000 milliseconds
}

// write check time function;

 function getLocalStorage() {

  $("#nine-block .input-group-text").val(localStorage.getItem("nine"));
  $("#ten-block .input-group-text").val(localStorage.getItem("ten"));
  $("#eleven-block .input-group-text").val(localStorage.getItem("eleven"));
  $("#twelve-block .input-group-text").val(localStorage.getItem("twelve"));
  $("#one-block .input-group-text").val(localStorage.getItem("one"));
  $("#two-block .input-group-text").val(localStorage.getItem("two"));
  $("#three-block .input-group-text").val(localStorage.getItem("three"));
  $("#four-block .input-group-text").val(localStorage.getItem("four"));
  $("#five-block .input-group-text").val(localStorage.getItem("five"));
 }
 
// save function : not working, only saving input from first button!
function saveInput() {
  $(".btn saveBtn").each(function() {
    $(".btn saveBtn").on("click", function() {
    let input = $(this).siblings("textarea").val();
    let timeblock = $(this).parent().attr("id"); 
    
    localStorage.setItem(timeblock, input);
    });
  });
}
 //takes input and saves to local on click of save button


$(document).ready(function() {
    $("#currentDay").text(moment().format('MMMM Do, YYYY'));
    // Handler for .ready() called.
    // assigning eventlisteners;

    getLocalStorage();
    saveInput();
  });





//make each input field sortable?
  // $( function() {
  //   $( "#sortable" ).sortable();
  // } );



















// write populate input function; 