let dateEl = $("#currentDay");
let hourRowEl = $(".input-group");

let nineEl = $("#block9 .input-group-text");
let tenEl = $("#block10 .input-group-text");
let elevenEl = $("#block11 .input-group-text");
let twelveEl = $("#block12 .input-group-text");
let thirteenEl = $("#block13 .input-group-text");
let fourteenEl = $("#block14 .input-group-text");
let fifteenEl = $("#block15 .input-group-text");
let sixteenEl = $("#block16 .input-group-text");
let seventeenEl = $("#block17 .input-group-text");
let saveBtnEl = $(".saveBtn");


function checkTime() {
  
  let now = moment().hour();

  hourRowEl.each(function() {
    let worktime = parseInt($(this).attr("id").split("block")[1]);
    // if now is later than worktime;
    if (worktime < now) {
      // add a "past" class to the element
      $(this).children("textarea").addClass("past");
    // if now is the same as worktime
    } else if (worktime === now) {
        // add a "present" class to the element
        $(this).children("textarea").addClass("present");
    } else {
      // if now is earlier than worktime add a "future" class to the element
      $(this).children("textarea").addClass("future");
    }
  });
}

function getLocalStorage() {

  hourRowEl.each(function() {
//     let storedTask = JSON.parse(localStorage.getItem($(this).children("textarea").val()));
    
//     if (storedTask !== null) {
//       $(this).children("textarea").val() = storedTask;
//     }
  });
}

//initilization function;
$(document).ready(function() {
  //setting today's date with moment.js;
  dateEl.text(moment().format('MMMM Do, YYYY'));
    //console.log(dateEl.text(moment().format('MMMM Do, YYYY')));
    // create handler event for ready function;
    saveBtnEl.on("click", function() {
      //get user input text content;
      let input = $(this).siblings("textarea").val();
      //console.log(input);
      //get timeslot associated with user input text;
      let timeslot = $(this).parent().attr("id");
      //console.log(timeblock);
      //add user input and time to local storage;
      localStorage.setItem(timeslot, input);
      });
    // call getlocalstorage function;
    checkTime();
    getLocalStorage();
  });