# Workday-Calendar

## Application Overview

A simple workday scheduling application is invaluable nowadays. Whether the calendar is used for personal or business task scheduling, it is important to be able to save each task input and insure that, upon closing and reopening the window, the task is still visible in its respective timeslot on the calendar.

When the user clicks on the timeslot’s save button, the Work Day Calendar application stores their saved input in local storage and pushes that value to the input field to prevent the field from clearing upon page reload. If a new task is saved to the same timeslot, the old task will be overwritten. Each timeslot has been built with an expandable field, so that task or project detail can be included an timeslot size can be customized per user. Each field also has scrolling functionality within the input area, for an alternative way at viewing more detailed input data.

The Work Day Calendar application uses moment.js to provide today’s date for each user and track their current time of day against the standard workday hours of 9am to 5pm (listed in 24:00 clock notation). If the timeslot chosen is earlier than the current hour, the task input is color-coded in grey to indicate a past event. If the timeslot chosen is the current hour, the task input is color-coded in yellow to indicate a present event, and when the timeslot chosen is later than the current hour, the task input is color-coded in blue to indicate a future event.

## Mock-Up

![Static Image](https://github.com/jacih/Workday-Calendar/blob/1452e85634b5fb7b113be24d80e3359ca8bca6da/assets/images/Work%20Day%20Calendar%20mockup.png)

[Quicktime of Work Day Calendar functionality](https://github.com/jacih/Workday-Calendar/blob/2710da42532f1662f6b115c8e1d839f0344e7452/assets/images/WorkDay_Calendar_compressedVideo.mov)

### Application Links

[Live Staging Link](https://jacih.github.io/Workday-Calendar/)

[Github Repository](https://github.com/jacih/Workday-Calendar.git)

### License

[Apache License v2.0 Link](https://www.apache.org/licenses/LICENSE-2.0)

[Repo License File](https://github.com/jacih/Workday-Calendar/blob/20276f33e1d95da828f7bc268962228fdf743b14/LICENSE.txt)
