window. onload= function (){
  var second=00;
  var millisecond=00;
  var appendmillisecond=document.getElementById("millisecond");
  var appendSecond=document.getElementById("second");
  var buttonstart=document.getElementById('button-start');
  var buttonstop=document.getElementById('button-stop');
  var buttonreset=document.getElementById('button-reset');
  var Interval ;
}
buttonstart.onclick = function () {
  
  clearInterval(Interval);
  Interval=setInterval(startTimer,10)
}
buttonstop.onclick = function(){
  clearInterval(Interval);
}
buttonreset.onclick = function(){
  clearInterval(Interval);
  second=00;
  millisecond=00;
  appendmillisecond=innerHTML=millisecond;
  appendsecond=innerHTML=second;
}
function startTimer(){
  millisecond++;
  
  if(millisecond<=9){
    appendmillisecond=innerHTML="0" + millisecond;
    
  }
  if(millisecond>9){
    appendmillisecond=innerHTML= millisecond;
}
  if(millisecond>99){
    second++
    appendSecond=innerHTML="0" + second;
    millisecond=0;
    appendmillisecond=innerHTML="0" + 0;
    
    if(second>9){
      appendSecond.innerHTML=second;
    }
  }
}
