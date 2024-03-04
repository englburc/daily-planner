const elPCurrentDay = $("#currentDay")
const elDivTimeblocks = $(".container")

const timeSlots = [["8AM", 8], ["9AM", 9], ["10AM", 10], ["11AM", 11],
["12PM", 12], ["1PM", 13], ["2PM", 14], ["3PM", 15], ["4PM", 16], ["5PM", 17]];

// Display the current day at the top of the calender when a user opens the planner.
elPCurrentDay.text(dayjs().format("dddd, MMMM D"))


// Present time blocks for standard business hours when the user scrolls down.
$.each(timeSlots, function(i, t){
    let row = $("<div>").addClass("row");
    let hour = $("<div>").addClass("hour");
    let description = $("<textarea>").addClass("description");
    let button = $("<div>").addClass("button");

    hour.html("<br>" + t[0]);
    row.attr("data-time", t[1]);
    row.append(hour, description, button);
    elDivTimeblocks.append(row);

})
// Color-code each time block based on past, present, and future when the time block is viewed.

// Allow a user to enter an event when they click a time block

// Save the event in local storage when the save button is clicked in that time block.

// Persist events between refreshes of a page