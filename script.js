// script.js

// DARK MODE

const darkBtn =
document.getElementById("darkBtn");

darkBtn.addEventListener("click", ()=>{

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    localStorage.setItem("theme","light");

  }else{

    localStorage.setItem("theme","dark");

  }

});

// LOAD THEME

window.onload = ()=>{

  let savedTheme =
  localStorage.getItem("theme");

  if(savedTheme === "light"){

    document.body.classList.add("light-mode");

  }

};

// FILE UPLOAD

function uploadPDF(){

  let file =
  document.getElementById("pdfFile").files[0];

  let status =
  document.getElementById("uploadStatus");

  if(file){

    status.innerHTML =
    `Uploaded: ${file.name}`;

    showNotification("PDF Uploaded!");

  }else{

    status.innerHTML =
    "Please select a file.";

  }

}

// TEXT TO SPEECH

function speakText(text){

  let speech =
  new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";

  window.speechSynthesis.speak(speech);

}

// NOTIFICATION

function showNotification(message){

  let notification =
  document.createElement("div");

  notification.className =
  "notification";

  notification.innerHTML =
  message;

  document.body.appendChild(notification);

  setTimeout(()=>{

    notification.remove();

  },3000);

}

// LOADER

function showLoader(){

  document.getElementById("loader").style.display =
  "flex";

}

function hideLoader(){

  document.getElementById("loader").style.display =
  "none";

}