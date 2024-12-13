// Code Converter
function convert() {
  const text = document.getElementById('text').value;
  const option = document.getElementById('option').value;
  const message = document.getElementById('message');
  
  // if statement
  if (text === "") {
    message.textContent = "Enter some text first!";
  } else if (option === "uppercase") {
    message.textContent = text.toUpperCase();
  } else if (option === "lowercase") {
    message.textContent = text.toLowerCase();
  } else if (option === "length") {
    message.textContent = text.length;
  } else if (option === "repeat") {
    message.textContent = (text + " ").repeat(5);
  }
  
  // timeout to clear both value
  setTimeout(function() {
    document.getElementById('text').value = "";
    message.textContent = "";
  }, 3000);
}

// copied text
function copyOutput() {
  message.select();
  message.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert("Text copied: " + message.value);
}