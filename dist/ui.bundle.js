/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/Frontend/Ui.js ***!
  \****************************/
// Elements
const watchCertifyButton = document.getElementById('watchCertifyButton');
const generateQuizButton = document.getElementById('generateQuizButton');
const resetCertificateButton = document.getElementById('resetCertificateButton'); // Updated
const resetQuizButton = document.getElementById('resetQuizButton'); // Updated
const certificateSection = document.getElementById('certificateSection');
const quizSection = document.getElementById('quizSection');
const buttonContainer = document.getElementById('buttonContainer');
const generateButton = document.getElementById('generateButton');
// Event Listeners

watchCertifyButton.addEventListener('click', () => {
  localStorage.setItem('currentSection', 'certificate'); // Save selected section
  updateUI(); // Update the display
});
generateQuizButton.addEventListener('click', () => {
  localStorage.setItem('currentSection', 'quiz'); // Save selected section
  updateUI(); // Update the display
});
resetCertificateButton.addEventListener('click', () => {
  // Reset UI to default state
  localStorage.setItem('currentSection', 'buttons');
  updateUI(); // Update the display

  // Reset progress and related elements
  chrome.storage.sync.set({
    videoCompleted: false,
    videoProgress: 0
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error resetting progress:', chrome.runtime.lastError);
      return;
    } // Reset progress display
    // generateButton.style.display = 'block'; // Show generate button again
    console.log('Progress reset successfully.');
  });
});
resetQuizButton.addEventListener('click', () => {
  // Updated
  localStorage.setItem('currentSection', 'buttons'); // Reset to default state
  updateUI(); // Update the display
});

// Function to update the UI based on localStorage
function updateUI() {
  const currentSection = localStorage.getItem('currentSection') || 'buttons'; // Default to 'buttons'

  // Reset all sections
  certificateSection.style.display = 'none';
  quizSection.style.display = 'none';
  buttonContainer.style.display = 'block';
  watchCertifyButton.disabled = false;
  generateQuizButton.disabled = false;

  // Show the appropriate section based on the state
  if (currentSection === 'certificate') {
    certificateSection.style.display = 'block';
    buttonContainer.style.display = 'none';
    watchCertifyButton.disabled = true;
  } else if (currentSection === 'quiz') {
    quizSection.style.display = 'block';
    buttonContainer.style.display = 'none';
    generateQuizButton.disabled = true;
  }
}

// Initialize UI on page load
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('currentSection')) {
    localStorage.setItem('currentSection', 'buttons'); // Set default state on first load
  }
  updateUI(); // Apply the saved state
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixjQUFjLEtBQUssYUFBYSxFQUFFO0lBQ2xDbkIsa0JBQWtCLENBQUNxQixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBQzFDcEIsZUFBZSxDQUFDbUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUN0QzVCLGtCQUFrQixDQUFDNkIsUUFBUSxHQUFHLElBQUk7RUFDdEMsQ0FBQyxNQUFNLElBQUlKLGNBQWMsS0FBSyxNQUFNLEVBQUU7SUFDbENsQixXQUFXLENBQUNvQixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO0lBQ25DcEIsZUFBZSxDQUFDbUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtJQUN0Q3pCLGtCQUFrQixDQUFDMEIsUUFBUSxHQUFHLElBQUk7RUFDdEM7QUFDSjs7QUFFQTtBQUNBNUIsUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELElBQUksQ0FBQ0MsWUFBWSxDQUFDZSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtJQUN6Q2YsWUFBWSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztFQUN2RDtFQUNBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnJvbnRlbmQvVWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRWxlbWVudHNcclxuY29uc3Qgd2F0Y2hDZXJ0aWZ5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhdGNoQ2VydGlmeUJ1dHRvbicpO1xyXG5jb25zdCBnZW5lcmF0ZVF1aXpCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGVRdWl6QnV0dG9uJyk7XHJcbmNvbnN0IHJlc2V0Q2VydGlmaWNhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRDZXJ0aWZpY2F0ZUJ1dHRvbicpOyAvLyBVcGRhdGVkXHJcbmNvbnN0IHJlc2V0UXVpekJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldFF1aXpCdXR0b24nKTsgLy8gVXBkYXRlZFxyXG5jb25zdCBjZXJ0aWZpY2F0ZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VydGlmaWNhdGVTZWN0aW9uJyk7XHJcbmNvbnN0IHF1aXpTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpTZWN0aW9uJyk7XHJcbmNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b25Db250YWluZXInKTtcclxuY29uc3QgZ2VuZXJhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VuZXJhdGVCdXR0b24nKVxyXG4vLyBFdmVudCBMaXN0ZW5lcnNcclxuXHJcbndhdGNoQ2VydGlmeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50U2VjdGlvbicsICdjZXJ0aWZpY2F0ZScpOyAvLyBTYXZlIHNlbGVjdGVkIHNlY3Rpb25cclxuICAgIHVwZGF0ZVVJKCk7IC8vIFVwZGF0ZSB0aGUgZGlzcGxheVxyXG59KTtcclxuXHJcbmdlbmVyYXRlUXVpekJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50U2VjdGlvbicsICdxdWl6Jyk7IC8vIFNhdmUgc2VsZWN0ZWQgc2VjdGlvblxyXG4gICAgdXBkYXRlVUkoKTsgLy8gVXBkYXRlIHRoZSBkaXNwbGF5XHJcbn0pO1xyXG5cclxucmVzZXRDZXJ0aWZpY2F0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIFJlc2V0IFVJIHRvIGRlZmF1bHQgc3RhdGVcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50U2VjdGlvbicsICdidXR0b25zJyk7IFxyXG4gICAgdXBkYXRlVUkoKTsgLy8gVXBkYXRlIHRoZSBkaXNwbGF5XHJcblxyXG4gICAgLy8gUmVzZXQgcHJvZ3Jlc3MgYW5kIHJlbGF0ZWQgZWxlbWVudHNcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgdmlkZW9Db21wbGV0ZWQ6IGZhbHNlLCB2aWRlb1Byb2dyZXNzOiAwIH0sICgpID0+IHtcclxuICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlc2V0dGluZyBwcm9ncmVzczonLCBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfS8vIFJlc2V0IHByb2dyZXNzIGRpc3BsYXlcclxuICAgICAgICAvLyBnZW5lcmF0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8gU2hvdyBnZW5lcmF0ZSBidXR0b24gYWdhaW5cclxuICAgICAgICBjb25zb2xlLmxvZygnUHJvZ3Jlc3MgcmVzZXQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbnJlc2V0UXVpekJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy8gVXBkYXRlZFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRTZWN0aW9uJywgJ2J1dHRvbnMnKTsgLy8gUmVzZXQgdG8gZGVmYXVsdCBzdGF0ZVxyXG4gICAgdXBkYXRlVUkoKTsgLy8gVXBkYXRlIHRoZSBkaXNwbGF5XHJcbn0pO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBVSSBiYXNlZCBvbiBsb2NhbFN0b3JhZ2VcclxuZnVuY3Rpb24gdXBkYXRlVUkoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U2VjdGlvbicpIHx8ICdidXR0b25zJzsgLy8gRGVmYXVsdCB0byAnYnV0dG9ucydcclxuXHJcbiAgICAvLyBSZXNldCBhbGwgc2VjdGlvbnNcclxuICAgIGNlcnRpZmljYXRlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcXVpelNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHdhdGNoQ2VydGlmeUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgZ2VuZXJhdGVRdWl6QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gU2hvdyB0aGUgYXBwcm9wcmlhdGUgc2VjdGlvbiBiYXNlZCBvbiB0aGUgc3RhdGVcclxuICAgIGlmIChjdXJyZW50U2VjdGlvbiA9PT0gJ2NlcnRpZmljYXRlJykge1xyXG4gICAgICAgIGNlcnRpZmljYXRlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB3YXRjaENlcnRpZnlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50U2VjdGlvbiA9PT0gJ3F1aXonKSB7XHJcbiAgICAgICAgcXVpelNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZ2VuZXJhdGVRdWl6QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5pdGlhbGl6ZSBVSSBvbiBwYWdlIGxvYWRcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTZWN0aW9uJykpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFNlY3Rpb24nLCAnYnV0dG9ucycpOyAvLyBTZXQgZGVmYXVsdCBzdGF0ZSBvbiBmaXJzdCBsb2FkXHJcbiAgICB9XHJcbiAgICB1cGRhdGVVSSgpOyAvLyBBcHBseSB0aGUgc2F2ZWQgc3RhdGVcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ3YXRjaENlcnRpZnlCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2VuZXJhdGVRdWl6QnV0dG9uIiwicmVzZXRDZXJ0aWZpY2F0ZUJ1dHRvbiIsInJlc2V0UXVpekJ1dHRvbiIsImNlcnRpZmljYXRlU2VjdGlvbiIsInF1aXpTZWN0aW9uIiwiYnV0dG9uQ29udGFpbmVyIiwiZ2VuZXJhdGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInVwZGF0ZVVJIiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJzZXQiLCJ2aWRlb0NvbXBsZXRlZCIsInZpZGVvUHJvZ3Jlc3MiLCJydW50aW1lIiwibGFzdEVycm9yIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiY3VycmVudFNlY3Rpb24iLCJnZXRJdGVtIiwic3R5bGUiLCJkaXNwbGF5IiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9