// Define elements
const watchCertifyButton = document.getElementById('watchCertifyButton');
const generateQuizButton = document.getElementById('generateQuizButton');
const buttonContainerElement = document.getElementById('buttonContainer');

const certificateSection = document.getElementById('certificateSection');


const generateCertificatebtnElement = document.getElementById('generateCertificatebtn')
const quizSection = document.getElementById('quizSection');

const resetCertificateBtnElement = document.getElementById('resetCertificateButton')

const SECTIONS = {
    BUTTONS: 'Btn',
    CERTIFICATE: 'certificate',
    QUIZ: 'quiz',
  };


watchCertifyButton.addEventListener('click', () => {
    chrome.storage.sync.set({ currentSection: SECTIONS.CERTIFICATE }, updateUI);
  });
  
 
  generateQuizButton.addEventListener('click', () => {
    chrome.storage.sync.set({ currentSection: SECTIONS.QUIZ }, updateUI);
  });

  



  resetCertificateBtnElement.addEventListener('click', () => {
    chrome.storage.sync.set({ currentSection: SECTIONS.BUTTONS, videoCompleted: false, videoProgress: 0 }, () => {
      console.log('Progress reset successfully.');
      updateUI();
    });
  });


document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['currentSection'], (data) => {
      if (!data.currentSection) {
        chrome.storage.sync.set({ currentSection: SECTIONS.BUTTONS }, updateUI);
      } else {
        updateUI();
      }
    });
  });
  




  function updateUI() {
    chrome.storage.sync.get(['currentSection','videoCompleted','username'], (data) => {
      const currentSection = data.currentSection || SECTIONS.BUTTONS;
      const videoCompleted = data.videoCompleted || false;
   
      // certificateSection.style.display = 'none';
      // quizSection.style.display = 'none';
      // buttonContainerElement.style.display = 'none';
      // GeneratecertificatesectionElement.style.display = 'none';
      // generatedcertificatesectionElemet.style.display = 'none';
  
      // Update visibility based on current section
      if (currentSection === SECTIONS.CERTIFICATE) {
        certificateSection.style.display = 'block';
        Hidebuttons();
        // if (videoCompleted || videoProgress === 100) {
        //     console.log("Video completed: showing certificate generation section");
        //     GeneratecertificatesectionElement.style.display = 'block';
        //   } else {
        //     console.log("Video not completed: hiding certificate generation section");
        //     // GeneratecertificatesectionElement.style.display = 'none';
        //   }
          
      } else if (currentSection === SECTIONS.QUIZ) {
        quizSection.style.display = 'block';
        Hidebuttons();
      } else if (currentSection === SECTIONS.BUTTONS) {
        // quizSection.style.display = 'none';
        certificateSection.style.display = 'none';
        buttonContainerElement.style.display = 'block';
      }
    });
  }





 


const Hidebuttons = () => {
  buttonContainerElement.style.display = 'none';
};

