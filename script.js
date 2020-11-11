window.onload = function () {
    var memeTitle = document.getElementById("date");
    var timeForMemes = document.getElementById("time");
    //var 
    var time = moment().format("LL");// this the date format
    //var not = $('.notes')
    memeTitle.textContent = "" + time;

    window.setInterval(function () {
        timeForMemes.textContent = "Meme time: " + moment().format("LT");
    }, 1000);

    //To save notes in local storage
    window.localStorage
// make the current hour be green and all others red
$(document).ready(function(){

})
//define as future or as present

    var noteToSave = [
        {
            id: "0",
            hour: "09",
            time: "09",
            notes: ""
        },
        {
            id: "1",
            hour: "10",
            time: "10",
            notes: ""
        },
        {
            id: "2",
            hour: "11",
            time: "11",
            notes: ""
        },
        {
            id: "3",
            hour: "12",
            time: "12",
            notes: ""
        },
        {
            id: "4",
            hour: "01",
            time: "13",
            notes: ""
        },
        {
            id: "5",
            hour: "02",
            time: "14",
            notes: ""
        },
        {
            id: "6",
            hour: "03",
            time: "15",
            notes: ""
        },
        {
            id: "7",
            hour: "04",
            time: "16",
            notes: ""
        },
        {
            id: "8",
            hour: "05",
            time: "17",
            notes: ""
        },

    ]
}