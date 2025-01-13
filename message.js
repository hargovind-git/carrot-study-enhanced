// Task Form Submission
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = document.getElementById('taskInput').value;
  const emoji = document.getElementById('emojiInput').value || '🥕';
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const imgSrc = file ? URL.createObjectURL(file) : '';

  // Create a new task list item
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${emoji} ${taskText}</span>
    ${imgSrc ? `<img src="${imgSrc}" alt="Task Image">` : ''}
  `;
  taskList.appendChild(li);

  // Reset the form
  taskForm.reset();
});

// Pomodoro Timer
let timer;
let timeLeft = 1500; // 25 minutes

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('pomodoroTimer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('startTimer').addEventListener('click', function () {
  clearInterval(timer);
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      alert('Time is up! Take a break.');
    }
  }, 1000);
});

document.getElementById('stopTimer').addEventListener('click', function () {
  clearInterval(timer);
});

document.getElementById('resetTimer').addEventListener('click', function () {
  clearInterval(timer);
  timeLeft = 1500; // Reset to 25 minutes
  updateTimerDisplay();
});

updateTimerDisplay();
