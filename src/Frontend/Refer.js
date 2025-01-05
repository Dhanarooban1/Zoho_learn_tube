// Elements
const certificateSection = document.getElementById('certificateSection');

const certificateElement = document.getElementById('generateCertificate');

const quizSection = document.getElementById('quizSection');
const buttonContainer = document.getElementById('buttonContainer');
const downloadCertificateButton = document.getElementById('downloadCertificateButton');
const shareLinkedInButton = document.getElementById('shareLinkedInButton');
const userNameInput = document.getElementById('userName');
const generateCertificateButton = document.getElementById('generateCertificatebtn');

const resetCertificateButton = document.getElementById('resetCertificateButton');
const resetQuizButton = document.getElementById('resetQuizButton');
// Event Listeners





watchCertifyButton.addEventListener('click', () => {
  chrome.storage.sync.set({ currentSection: 'certificate' }, updateUI);
});

generateQuizButton.addEventListener('click', () => {
  chrome.storage.sync.set({ currentSection: 'quiz' }, updateUI);
});

resetCertificateButton.addEventListener('click', () => {
  chrome.storage.sync.set({ currentSection: 'buttons', videoCompleted: false, videoProgress: 0 }, () => {
    console.log('Progress reset successfully.');
    updateUI();
  });
});

resetQuizButton.addEventListener('click', () => {
  chrome.storage.sync.set({ currentSection: 'buttons' }, updateUI);
});

generateCertificateButton.addEventListener('click', () => {
  const userName = userNameInput.value.trim();
  if (userName) {
    chrome.storage.sync.set({ userName, certificateGenerated: true }, () => {
      userNameInput.style.display = 'none';
      generateCertificateButton.style.display = 'none';
      downloadCertificateButton.style.display = 'block';
      shareLinkedInButton.style.display = 'block';
    });
  }
});

// Function to update the UI based on chrome.storage.sync
function updateUI() {
  chrome.storage.sync.get(['currentSection', 'certificateGenerated'], (data) => {
    const currentSection = data.currentSection || 'buttons';
    certificateSection.style.display = 'none';
    quizSection.style.display = 'none';
    buttonContainer.style.display = 'block';
    watchCertifyButton.disabled = false;
    generateQuizButton.disabled = false;

    if (currentSection === 'certificate') {
      certificateSection.style.display = 'block';
      certificateElement.style.display = data.certificateGenerated ? 'none' : 'block';
      downloadCertificateButton.style.display = data.certificateGenerated ? 'block' : 'none';
      shareLinkedInButton.style.display = data.certificateGenerated ? 'block' : 'none';
      buttonContainer.style.display = 'none';
      watchCertifyButton.disabled = true;
    } else if (currentSection === 'quiz') {
      quizSection.style.display = 'block';
      buttonContainer.style.display = 'none';
      generateQuizButton.disabled = true;
    }
  });
}

// Initialize UI on page load
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['currentSection'], (data) => {
    if (!data.currentSection) {
      chrome.storage.sync.set({ currentSection: 'buttons' }, updateUI);
    } else {
      updateUI();
    }
  });
});
