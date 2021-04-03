var SpeechRecognition = window.webkitSpeechRecognition; 

var recognition = new SpeechRecognition(); 


function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
console.log(event);
var Content = event.results[0][0].transcript;
document.getElementsById("textbox").innerHTML = Content;

console.log(Content); 
if(Content =="take my selfie")
 {
      console.log("taking selfie --- ");
       speak(); 
    }
}

function speak()
{
    var synth = window.speechSynthesis;
speak_data = document.getElementsById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

Webcam.set({
     width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");


