window.onload = function () {
  var memeTitle = document.getElementById("date");
  var timeForMemes = document.getElementById("time");

  var time = moment().format("LL");// this the date format
  //var not = $('.notes')
  memeTitle.textContent = "" + time;

  window.setInterval(function () {
    timeForMemes.textContent = "Meme time: " + moment().format("LT");
  }, 1000);

  $(".saveMemes").on("click", function (event) {
    event.preventDefault();
    var memeIndex = $(this).siblings(".notes")
    memes[memeIndex].notes = $(this).notes
    saveMemes();
    displayMemes();
  });

  function saveMemes() {
    localStorage.setItem("memes", JSON.stringify(memes));// save my meme notes to local storage
  };
  function displayMemes(){
    memes.forEach(function(hour){
      $('#memehour').val(hour.notes)
    })
  }
  function init(){
    var saveMemes = JSON.parse(localStorage.getItem('memes'));
    if(saveMemes){
      memes = saveMemes;
    }
    saveMemes();
    displayMemes();
  }
  init();
  // array for my memes
  var memes = [
    {
      id: "9:00am",
      notes: ""
    },
    {
      id: "10:00am",
      notes: ""
    }, {
      id: "11:00am",
      notes: ""
    }, {
      id: "12:00pm",
      notes: ""
    }, {
      id: "1:00pm",
      notes: ""
    }, {
      id: "2:00pm",
      notes: ""
    }, {
      id: "3:00pm",
      notes: ""
    }, {
      id: "4:00pm",
      notes: ""
    }, {
      id: "5:00pm",
      notes: ""
    }, {
      id: "6:00pm",
      notes: ""
    }, {
      id: "7:00pm",
      notes: ""
    }, {
      id: "8:00pm",
      notes: ""
    }, {
      id: "9:00pm",
      notes: ""
    }
  ]
  
  

 

};