window.onload = function () {
    var memeTitle = document.getElementById("date");
    var timeForMemes = document.getElementById("time");
    var surpriseBtn = $('#surprise')
    var saveMemes = $('.saveMemes');
    var time = moment().format("LL");// this the date format
    //var not = $('.notes')
    memeTitle.textContent = "" + time;

    window.setInterval(function () {
        timeForMemes.textContent = "Meme time: " + moment().format("LT");
    }, 1000);
    

    { //vars for the textarea
    var note9Am = $("#note9Am");
    var note10Am = $("#note10Am");
    var note11Am = $("#note11Am");
    var note12Am = $("#note12Am");
    var note1Pm = $("#note1Pm");
    var note2Pm = $("#note2Pm");
    var note3Pm = $("#note3Pm");
    var note4Pm = $("#note4Pm");
    var note5Pm = $("#note5Pm");
    var note6Pm = $("#note6Pm");
    var note7Pm = $("#note7Pm");
    var note8Pm = $("#note8Pm");
    }
    // make the current hour be green and all others red
    $(document).ready(function () {
        current = parseInt(moment().format('HH'));
        $('textarea').each(function(){
            var name= parseInt($(this).attr("name"));
            if(name< current - 12){
                $(this).addClass("bg-danger")
            }else if(name=== current-12){
                $(this).addClass("bg-success")
            }else if(name> current-12){
                $(this).addClass("bg-secondary")
            }
    })

      


      //function to save the entrys
        saveMemes.click(function () {
            localStorage.setItem("9Am", (note9Am.val()))
            localStorage.setItem("10Am", (note10Am.val()))
            localStorage.setItem("11Am", (note11Am.val()))
            localStorage.setItem("12Am", (note12Am.val()))
            localStorage.setItem("1Pm", (note1Pm.val()))
            localStorage.setItem("2Pm", (note2Pm.val()))
            localStorage.setItem("3Pm", (note3Pm.val()))
            localStorage.setItem("4Pm", (note4Pm.val()))
            localStorage.setItem("5Pm", (note5Pm.val()))
            localStorage.setItem("6Pm", (note6Pm.val()))
            localStorage.setItem("7Pm", (note7Pm.val()))
            localStorage.setItem("8Pm", (note8Pm.val()))
            

        

        })
        //leaves and retrives from storage
        {
        $("#note9Am").append(localStorage.getItem("9Am"));
        $("#note10Am").append(localStorage.getItem("10Am"));
        $("#note11Am").append(localStorage.getItem("11Am"));
        $("#note12Am").append(localStorage.getItem("12Am"));
        $("#note1Pm").append(localStorage.getItem("1Pm"));
        $("#note2Pm").append(localStorage.getItem("2Pm"));
        $("#note3Pm").append(localStorage.getItem("3Pm"));
        $("#note4Pm").append(localStorage.getItem("4Pm"));
        $("#note5Pm").append(localStorage.getItem("5Pm"));
        $("#note6Pm").append(localStorage.getItem("6Pm"));
        $("#note7Pm").append(localStorage.getItem("7Pm"));
        $("#note8Pm").append(localStorage.getItem("8Pm"));
        }
        
    })
}


































