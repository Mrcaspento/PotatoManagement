window.onload = function()
{
  var title = document.getElementById("date");
  var timenow = document.getElementById("time");
    
  var time = moment().format("DD-MM-YYYY");
  
  title.textContent = "" + time;
  
  window.setInterval(function() {
    timenow.textContent = "Meme time: " + moment().format("h:mm:ss");
  }, 1000);
  
};

function saveNotes(){
    localStorage.setItem("memes",JSON.stringify(memes));// save my meme notes to local storage
};

var memes = [
    {id:"9:00am",
    
}
]

intit();

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    memes[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})