// Add Task Functionality
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = document.getElementById('taskInput').value;
  const emoji = document.getElementById('emojiInput').value || '🥕';
  const file = document.getElementById('fileInput').files[0];
  const imgSrc = file ? URL.createObjectURL(file) : '';

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${emoji} ${taskText}</span>
    ${imgSrc ? `<img src="${imgSrc}" alt="Task Image">` : ''}
  `;
  taskList.appendChild(li);

  taskForm.reset();
});

// Pomodoro Timer
let timer;
let timeLeft = 1500;

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
      alert('Time is up!');
    }
  }, 1000);
});

document.getElementById('stopTimer').addEventListener('click', function () {
  clearInterval(timer);
});

document.getElementById('resetTimer').addEventListener('click', function () {
  clearInterval(timer);
  timeLeft = 1500;
  updateTimerDisplay();
});

updateTimerDisplay();
