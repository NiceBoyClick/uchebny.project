var week;
(function (week) {
    week[week["monday"] = 0] = "monday";
    week[week["Tuesday"] = 1] = "Tuesday";
    week[week["Wednesday"] = 2] = "Wednesday";
    week[week["Thursday"] = 3] = "Thursday";
    week[week["Friday"] = 4] = "Friday";
    week[week["Saturday"] = 5] = "Saturday";
    week[week["Sunday"] = 6] = "Sunday";
})(week || (week = {}));
//let day: string = week[3];
console.log(week);
