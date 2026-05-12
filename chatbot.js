// chatbot.js

function sendMessage(){

  let input =
  document.getElementById("userInput");

  let chatbox =
  document.getElementById("chatbox");

  let userText =
  input.value;

  if(userText === ""){
    return;
  }

  // USER MESSAGE

  chatbox.innerHTML += `

  <div class="user">
    ${userText}
  </div>

  `;

  input.value = "";

  // TYPING EFFECT

  let typing =
  document.createElement("div");

  typing.className = "bot";

  typing.innerHTML = "Typing...";

  chatbox.appendChild(typing);

  chatbox.scrollTop =
  chatbox.scrollHeight;

  setTimeout(()=>{

    typing.remove();

    let botReply =
    "I am NeuroNest AI 🤖";

    if(userText.toLowerCase().includes("html")){

      botReply =
      "HTML is used to structure webpages.";

    }

    else if(userText.toLowerCase().includes("css")){

      botReply =
      "CSS is used for styling.";

    }

    else if(userText.toLowerCase().includes("javascript")){

      botReply =
      "JavaScript adds interactivity.";

    }

    else if(userText.toLowerCase().includes("ai")){

      botReply =
      "Artificial Intelligence simulates human intelligence.";

    }

    chatbox.innerHTML += `

    <div class="bot">
      ${botReply}
    </div>

    `;

    speakText(botReply);

    chatbox.scrollTop =
    chatbox.scrollHeight;

  },1500);

}

// VOICE INPUT

function startVoice(){

  let recognition =
  new webkitSpeechRecognition();

  recognition.lang = "en-US";

  recognition.onresult = function(event){

    document.getElementById("userInput").value =
    event.results[0][0].transcript;

  };

  recognition.start();

}