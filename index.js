function assignTask(crewmateButton, crewmateId) {
    var task = document.getElementById('taskInput').value.trim();

    if (task) {
        crewmateButton.disabled = true;
        crewmateButton.classList.add('assigned');
    
        var taskButton = document.createElement('button');
        taskButton.innerText = task;
        taskButton.classList.add('task');
        document.getElementById('tasksContainer').appendChild(taskButton);
    
        var countdown = 10;
        var countdownInterval = setInterval(function() {
            countdown--;
            taskButton.innerText = task + ' (Time remaining: ' + countdown + 's)';
            if (countdown <= 0) {
                clearInterval(countdownInterval);
                taskButton.parentNode.removeChild(taskButton);
                crewmateButton.disabled = false;
                crewmateButton.classList.remove('assigned');
            }
        }, 1000);
    }
}
function addMission() {
  var missionInput = document.getElementById('missionInput');
  var mission = missionInput.value.trim();

  if (mission) {
      var missionElement = document.createElement('p');
      missionElement.innerText = mission;
      missionElement.classList.add('mission');
      document.getElementById('missionsContainer').appendChild(missionElement);

      missionInput.value = '';
  } else {
      alert('Please enter a mission before adding.');
  }
}

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();

    if (task) {
        var taskButton = document.createElement('button');
        taskButton.innerText = task;
        taskButton.classList.add('task');
        document.getElementById('tasksContainer').appendChild(taskButton);

        taskInput.value = '';
    } else {
        alert('Please enter a task before adding.');
    }
}

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
