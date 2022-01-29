# Workday-Calendar

## Application Overview

A simple workday scheduling application is invaluable nowadays. Whether the calendar is used for personal or business task scheduling, it is important to be able to save each task input and insure that, upon closing and reopening the window, the task is still visible in its respective timeslot on the calendar.

When the user clicks on the timeslot’s save button, the Work Day Calendar application stores their saved input in local storage and pushes that value to the input field to prevent the field from clearing upon page reload. If a new task is saved to the same timeslot, the old task will be overwritten. Each timeslot has been built with an expandable field, so that task or project detail can be included an timeslot size can be customized per user. Each field also has scrolling functionality within the input area, for an alternative way at viewing more detailed input data.

The Work Day Calendar application uses moment.js to provide today’s date for each user and track their current time of day against the standard workday hours of 9am to 5pm (listed in 24:00 clock notation). If the timeslot chosen is earlier than the current hour, the task input is color-coded in grey to indicate a past event. If the timeslot chosen is the current hour, the task input is color-coded in yellow to indicate a present event, and when the timeslot chosen is later than the current hour, the task input is color-coded in blue to indicate a future event.

## Mock-Up

![]();

[]();

### Application Links

[live Staging Link](https://jacih.github.io/Workday-Calendar/)

[Github Repository](https://github.com/jacih/Workday-Calendar.git)

### License

[Apache License v2.0 Link](https://www.apache.org/licenses/LICENSE-2.0);
[Repo License File]();
