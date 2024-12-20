// Elements
const watchCertifyButton = document.getElementById('watchCertifyButton');
const generateQuizButton = document.getElementById('generateQuizButton');
const resetCertificateButton = document.getElementById('resetCertificateButton'); // Updated
const resetQuizButton = document.getElementById('resetQuizButton'); // Updated
const certificateSection = document.getElementById('certificateSection');
const quizSection = document.getElementById('quizSection');
const buttonContainer = document.getElementById('buttonContainer');

// Event Listeners
watchCertifyButton.addEventListener('click', () => {
    localStorage.setItem('currentSection', 'certificate'); // Save selected section
    updateUI(); // Update the display
});

generateQuizButton.addEventListener('click', () => {
    localStorage.setItem('currentSection', 'quiz'); // Save selected section
    updateUI(); // Update the display
});

resetCertificateButton.addEventListener('click', () => { // Updated
    localStorage.setItem('currentSection', 'buttons'); // Reset to default state
    updateUI(); // Update the display
});

resetQuizButton.addEventListener('click', () => { // Updated
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
