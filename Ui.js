watchCertifyButton.addEventListener('click', () => {
    hideButtons();
    certificateSection.style.display = 'block';
});


generateQuizButton.addEventListener('click', () => {
    hideButtons();
    quizSection.style.display = 'block';
});

function hideButtons() {
    document.getElementById('buttonContainer').style.display = 'none';
}