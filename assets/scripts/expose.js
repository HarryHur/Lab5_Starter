// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  
  var element = document.getElementById('expose');
  var volumControl = document.getElementById('volume-controls');
  const selectElement = document.getElementById('horn-select');
  const button = document.querySelector('button');
  var imgElement = document.querySelectorAll('img');
  var soundElement = document.getElementsByClassName("hidden");
  const jsConfetti = new JSConfetti();

  selectElement.addEventListener('change', (event) => {
      var select = document.getElementById("horn-select");
    
      if(select.value == "air-horn") {
        imgElement[0].src = "assets/images/air-horn.svg";
        
      }
      else if(select.value == "car-horn") {
        imgElement[0].src = "assets/images/car-horn.svg";
      }
      else {
        imgElement[0].src = "assets/images/party-horn.svg";
      }
    });
  
  selectElement.addEventListener('change',(event) => {
    var select = document.getElementById("horn-select");

    if(select.value == "air-horn") {
      soundElement[0].src = "assets/audio/air-horn.mp3";
    }
    else if(select.value == "car-horn") {
      soundElement[0].src = "assets/audio/car-horn.mp3";
    }
    else {
      soundElement[0].src = "assets/audio/party-horn.mp3";
    }
  });
  
  

  volumControl.addEventListener('change' ,(event) => {
    var volRange = document.getElementById('volume');

    if(volRange.value == 0) {
      imgElement[1].src = "assets/icons/volume-level-0.svg";
    }
    else if(volRange.value >= 1 && volRange.value < 33) {
      imgElement[1].src = "assets/icons/volume-level-1.svg";
    }
    else if(volRange.value >= 33 && volRange.value < 67) {
      imgElement[1].src = "assets/icons/volume-level-2.svg";
    }
    else {
        imgElement[1].src = "assets/icons/volume-level-3.svg";
      }
    });
  
 
  button.addEventListener('click', (event) => {
    var audio = soundElement[0];
    var select = document.getElementById("horn-select");

    volumControl.addEventListener('change', (event) => {
      var generalVol = document.getElementById('volume');
      var realvol = generalVol.value / 100;
      audio.volume = realvol;
    })
    if (select.value == "party-horn") {
      jsConfetti.addConfetti();
      audio.play();
    } 
    else {
      audio.play();
    }
  })
  
  }