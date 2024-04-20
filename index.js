function addButton() {
    var buttonContainer = document.getElementById("buttonContainer");
    var newButton = document.createElement("button");
    newButton.textContent = "Crewmate " + (buttonContainer.children.length + 1);
    
    // Apply a CSS class to the new button
    newButton.classList.add("custom-button");
    
    buttonContainer.appendChild(newButton);
  }
  

  function removeButton() {
    var buttonContainer = document.getElementById("buttonContainer");
    if (buttonContainer.children.length > 0) {
      buttonContainer.removeChild(buttonContainer.lastChild);
    }
  }