// summary.js

function summarizeNotes(){

  let notes =
  document.getElementById("notesInput").value;

  let output =
  document.getElementById("summaryOutput");

  let count =
  document.getElementById("wordCount");

  if(notes === ""){

    output.innerHTML =
    "Please enter notes.";

    return;

  }

  showLoader();

  setTimeout(()=>{

    let summary =
    notes.split(".").slice(0,3).join(".");

    output.innerHTML = `

    <h3>Summary</h3>

    <p>${summary}</p>

    <button onclick="copySummary()">
      Copy Summary
    </button>

    <button onclick="downloadSummary()">
      Download Summary
    </button>

    `;

    count.innerHTML =
    `Word Count: ${notes.split(" ").length}`;

    hideLoader();

    speakText("Summary generated successfully");

    showNotification("Summary Ready!");

  },1500);

}

// COPY SUMMARY

function copySummary(){

  let text =
  document.getElementById("summaryOutput").innerText;

  navigator.clipboard.writeText(text);

  showNotification("Summary Copied!");

}

// DOWNLOAD SUMMARY

function downloadSummary(){

  let text =
  document.getElementById("summaryOutput").innerText;

  let blob =
  new Blob([text], {type:"text/plain"});

  let a =
  document.createElement("a");

  a.href =
  URL.createObjectURL(blob);

  a.download =
  "summary.txt";

  a.click();

}