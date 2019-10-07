var today = new Date();
var inputDate = document.querySelector("#input-date");
var startingPrice = 1000;
var openSeatsOnPlane = 10;


function checkDaysBetweenTodayAndFlyDate() {
    var flyDate = inputDate.valueAsDate;
    var timeDiff = flyDate.getTime() - today.getTime();
    var differenceInDays = (Math.ceil(timeDiff/(24*60*60*1000)));
    return differenceInDays;
}

function calculatePrice() {
    var daysbetween = checkDaysBetweenTodayAndFlyDate();
    var actualPrice = (((startingPrice*openSeatsOnPlane*10)/100)-(daysbetween*10));
    console.log(actualPrice);

}

