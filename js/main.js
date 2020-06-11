/* Init all variable*/
var number = 0;
var timer = 0;
var timertmp = 0;
var avg1m = 0;
var avg1s = 0;

const result = document.querySelector ('.result'); 
const clickDisplay = document.querySelector ('#clickFinal');
const timeLeft = document.querySelector ('#timeleft');


/* Can't click the biggest button when lunching the website because you need to select your time first*/
$('#ClickButton').prop('disabled', true);


/* Functions to detect which button is pressed */
$('#seconds5').click (function (){
    timer = 5;      
    test();              
});
$('#seconds30').click (function (){
    timer = 30; 
    test();                   
});
$('#minute1').click (function (){
    timer = 60;
    test();                    
});
$('#minutes2').click (function (){
    timer = 120;
    test();                    
});


/* Main function that make other time buttons anavailable when another is pressed */


function test (){
	result.className = 'result';
    clickDisplay.innerHTML = 0;

    timertmp = timer;	

    $('.btn-outline-primary').prop('disabled',true);
    $('.reset').prop('disabled',false);
    $('#ClickButton').prop('disabled',false);
    


/* Run the code while the timer is > 0  */
/* When it is done, we anable all buttons that are needed and we send out average number of clicks per minute and second */

    var time = setInterval(function () {
        if (timer == 0){
            $('.btn').prop('disabled', false);
            $('#ClickButton').prop('disabled', true); 
            clearInterval(time);
            document.getElementById('avg1m').innerHTML = 60 * number/timertmp;
            document.getElementById('avg1s').innerHTML = number/timertmp;
            number=0;

            result.className = 'result-finished';
        }

        timeLeft.innerHTML = timer;
        timer --;
                    
    }, 1000);

};


/* Function that count the number of clicks on a specific button */
document.getElementById("ClickButton").onclick = function(){
    number ++;
    clickDisplay.innerHTML = number;
};             


/* Function to reset the timer as well as the number of clicks */
document.getElementById("reset").onclick = function(){
    timer = 0;
    clickDisplay.innerHTML = 0;
    document.getElementById('avg1m').innerHTML = 0;
	document.getElementById('avg1s').innerHTML = 0;

};



