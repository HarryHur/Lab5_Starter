// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
var synth = window.speechSynthesis;
var speech = new SpeechSynthesisUtterance();
const button = document.querySelector('button');
var inputTxt = document.getElementById("text-to-speak");
var voiceSelect = document.getElementById("voice-select");
var imgElement = document.querySelectorAll('img');
// var pitch = document.querySelector('#pitch');
// var pitchValue = document.querySelector('.pitch-value');
// var rate = document.querySelector('#rate');
// var rateValue = document.querySelector('.rate-value');
var voices = [];

// synth.onvoiceschanged = () => {
//   var voices = synth.getVoices();
//   speech.voice = voices[0];
//   //voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };


function populateVoiceList() {
  voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
    //document.getElementById("voice-select").appendChild(option);
  }
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
voiceSelect.addEventListener("change", () => {
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name'); 
  for(let i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      speech.voice = voices[i];
    }
  }
});
button.addEventListener('click', (event) => {
  speech.text = document.querySelector("textarea").value;
  
  synth.speak(speech);
  imgElement[0].src = "assets/images/smiling-open.png";
  speech.addEventListener('end', (event) => {
    imgElement[0].src = "assets/images/smiling.png"; 
  })
});
}