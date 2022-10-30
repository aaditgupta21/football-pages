var l;
function getDateTime(){
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        l = hour;
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
         return dateTime;
    }
    
    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("digital-clock").innerHTML = currentTime;
    }, 1000);
    
function checking(){
    var video = document.getElementById("background");
    if ((l>=0)&&(l<=5)){
        video.setAttribute("src","https://drive.google.com/uc?export=view&id=17ygkkkTDZb219cgsmglfod33qP8PGW58");
    }
    else if((l>=6)&&(l<=9)){
        video.setAttribute("src","https://drive.google.com/uc?export=view&id=1GV5A1SChf-hhkKheakg01GBd-CjpzlHx");
    }
    else if((l>=9)&&(l<=12)){
        video.setAttribute("src","https://drive.google.com/uc?export=view&id=1BFKYi3db4VSzsVtV6-imY8mhcOxHe-g_");
    }
    else if((l>=13)&&(l<=17)){
        video.setAttribute("src","https://drive.google.com/uc?export=view&id=1w4kUtoqYsylUpLU_g3oI7OtYhhPcQIiM");
    }
    else if((l>=18)&&(l<=20)){
        video.setAttribute("src","https://drive.google.com/uc?export=view&id=10qZhLCMqm_RDj89Jjp8edLKLurSjQmh-");
    }
    else if((l>=21)&&(l<=23)){
        video.setAttribute("src","https://drive.google.com/uc?export=view&id=1IOK35bZ6iM5q4rYxhLmlFwYa3lHjINXR");
    }        
}       



window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}
