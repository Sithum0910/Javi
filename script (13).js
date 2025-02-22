// Loading Animation
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.display = "none";
  }, 5000); // 5 seconds loading time
});

// Set the birthday date (October 16)
const birthday = new Date(new Date().getFullYear(), 9, 16); // Month is 0-indexed (9 = October)

// Function to update the countdown
function updateCountdown() {
  const now = new Date();
  if (now > birthday) {
    birthday.setFullYear(birthday.getFullYear() + 1); // Move to next year if birthday has passed
  }

  const timeDifference = birthday - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
