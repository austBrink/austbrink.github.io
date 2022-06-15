//don't even need a date here...like at all. 
//I will need access to all my buttons and my readout though...
let timerDisplay = document.getElementById("timer");
let wrkBtn = document.getElementById("strtWrkButton");
let brkBtn = document.getElementById("strtBrkButton");
let psBtn= document.getElementById("psButton");
let clearBtn = document.getElementById("kllButton");
let beep = document.getElementById("beepAudio");

//set variables to signal when a button has been pressed. This will control user behavior to avoid nonesense double presses ect. all set to false initially cuz you know nothing has happened...
let tiktok = false;
let workPressed = false;
let breakPressed = false;
let pausePrsd = false;
let killClock = false;

//set upsome variables to store time counts...
let stHours = 0;
let stMins = 0;
let stSec = 0;
let totalSec = 0;

//now create some functions for the basic functionality. 
//clock increments time variables sthours, stMins, stSec using a seconds to h:m:s conversion algorithm to keep the counter going. 
wrkBtn.addEventListener("click",()=>{
    //if someone elses clock isnt going....
    if(!tiktok){
        //clock state is ON and not due to a pause...
        if(!pausePrsd){
            tiktok = true; 
        }
        //So only starting new interval if we were not on pause and no current clocks were running. 
        if(tiktok){
            let intervalClock = setInterval(()=>{
                //if clear was pressed we want to kill the timer... 
                if(killClock){
                    clearInterval(intervalClock);
                    //reset desire to kill the clock...
                    killClock = false;
                }
                //not a redunancy from previous. Must check for clock state in case it has been updated by pause between interval runs. This condition is what makes the pause nutton work. 
                if(tiktok){
                    stSec++;
                   if(stSec === 60){
                     stMins++;
                     stSec = 0;
                   }
                   if(stMins === 60){
                     stHours++;
                     stMins = 0;
                   }
                   readOut();  
                   if(stSMins===25){
                       beep.play();
                       clearInterval(intervalClock);
                       //reset clock state
                       tiktok = false; 
                       //reset work button state to unpressed.
                       workPressed = false;
                   } 
                }   
            },1000);
        }
    }
    workPressed = true;
});

//very very similar functionality for the break init button...
brkBtn.addEventListener("click",()=>{
    //if someone elses clock isnt going....
    if(!tiktok){
        if(!pausePrsd){
            tiktok = true; 
        }
        //So only starting new interval if we were not on pause and no current clocks were running. 
        //So no interval going (!tiktok) AND there's no on pause from current interval. 
        if(tiktok){
            let intervalClock = setInterval(()=>{
            if(killClock){
                clearInterval(intervalClock);
                killClock = false;
            }
            //not a redunancy from previous. Must check for clock state in case it has been updated by pause between interval runs. This condition is what makes the pause nutton work. 
            if(tiktok){
                //add one to seconds at each execution. Then just convert these seconds into mins and hours. 
                stSec++;
               if(stSec === 60){
                 stMins++;
                 stSec = 0;
               }
               if(stMins === 60){
                 stHours++;
                 stMins = 0;
               }
               readOut();  
               if(stSMins===5){
                   beep.play();
                   clearInterval(intervalClock);
                   //reset clock state
                   tiktok = false; 
                   //reset work button state to unpressed.
                   breakPressed = false;
               } 
            }   
        },1000);
        }
    }
    breakPressed = true;
});

//toggle the "clockstate" we only allow the clock to run when tiktok is true...
psBtn.addEventListener("click", ()=>{
    //dont allow pausing if there is nothing to pause. It hangs. 
    if(workPressed || breakPressed){
        if(tiktok){
            tiktok = false;
            psBtn.innerText = "play";
        }else if (!tiktok){
            tiktok = true;
            psBtn.innerText = "pause";
        }
        pausePrsd = true;
    }
});

clearBtn.addEventListener("click", ()=>{
    tiktok = false;
    //reset clock state
    //reset work button state to unpressed.
    killClock = true;
    breakPressed = false;
    workPressed = false;
    pausePrsd = false;
    psBtn.innerText = "pause";
    stHours = 0;
    stMins = 0;
    stSec = 0;
    readOut();
});

function readOut(){
    timerDisplay.innerText = ('0' + (stHours)).slice(-2) + " : " + ('0' + (stMins)).slice(-2) + " : " + ('0' + (stSec)).slice(-2);
  }