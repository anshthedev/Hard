// Function to handle assigning a task to a crewmate
function assignTask(crewmateButton, crewmateId) {
    var task = document.getElementById('taskInput').value.trim();
    
    // Check if task is provided
    if (task) {
        crewmateButton.disabled = true;
        crewmateButton.classList.add('assigned');
    
        var taskButton = document.createElement('button');
        taskButton.innerText = task;
        taskButton.classList.add('task');
        document.getElementById('tasksContainer').appendChild(taskButton);
    
        var countdown = 10; // Adjust countdown duration as needed (in seconds)
        var countdownInterval = setInterval(function() {
            countdown--;
            taskButton.innerText = task + ' (Time remaining: ' + countdown + 's)';
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                taskButton.parentNode.removeChild(taskButton);
                // Re-enable crewmate button when task is completed or removed
                crewmateButton.disabled = false;
                crewmateButton.classList.remove('assigned');
            }
        }, 1000);
    }
}

  
  // Function to handle adding crewmate buttons
  function addButton() {
    var buttonContainer = document.getElementById('buttonContainer');
    var newButton = document.createElement('button');
    var crewmateCount = document.querySelectorAll('.crewmate').length + 1-1;
    newButton.setAttribute('class', 'crewmate');
    newButton.innerHTML = 'Crewmate ' + crewmateCount;
    newButton.onclick = function() {
      assignTask(newButton, 'crewmate' + crewmateCount);
    };
    buttonContainer.appendChild(newButton);
  }
  
  // Function to handle removing crewmate buttons
  function removeButton() {
    var buttonContainer = document.getElementById('buttonContainer');
    var crewmateButtons = document.getElementsByClassName('crewmate');
    if (crewmateButtons.length > 0) {
      buttonContainer.removeChild(crewmateButtons[crewmateButtons.length - 1]);
    }
  }

  function land(){
    landing.innerHTML = `
    <p1>Currently Landed</p1>`;
  }
  
  function lift(){
    landing.innerHTML = `
    <p1>Currently In Air</p1>`;
  }

  