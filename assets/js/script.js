let dateEl = $("#currentDay");
let hourRowEl = $(".input-group");

let saveBtnEl = $(".saveBtn");


function checkTime() {
  
  let now = moment().hour();

  hourRowEl.each(function() {
    let worktime = parseInt($(this).attr("id").split("hour")[1]);
    if (worktime < now) {
      $(this).children("textarea").addClass("past");
    } else if (worktime === now) {
        $(this).children("textarea").addClass("present");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });
}

$(document).ready(function() {

  dateEl.text(moment().format('MMMM Do, YYYY'));

    saveBtnEl.on("click", function() {
      let input = $(this).siblings("textarea").val();
      let timeslot = $(this).parent().attr("id");
      localStorage.setItem(timeslot, input);
      });

  checkTime();
}
