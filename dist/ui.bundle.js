/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/Frontend/Ui.js ***!
  \****************************/
// Define elements
var watchCertifyButton = document.getElementById('watchCertifyButton');
var generateQuizButton = document.getElementById('generateQuizButton');
var buttonContainerElement = document.getElementById('buttonContainer');
var certificateSection = document.getElementById('certificateSection');
var generateCertificatebtnElement = document.getElementById('generateCertificatebtn');
var quizSection = document.getElementById('quizSection');
var resetCertificateBtnElement = document.getElementById('resetCertificateButton');
var resetQuizButtonElement = document.getElementById('resetQuizButton');
var SECTIONS = {
  BUTTONS: 'Btn',
  CERTIFICATE: 'certificate',
  QUIZ: 'quiz'
};
watchCertifyButton.addEventListener('click', function () {
  chrome.storage.sync.set({
    currentSection: SECTIONS.CERTIFICATE
  }, updateUI);
});
generateQuizButton.addEventListener('click', function () {
  chrome.storage.sync.set({
    currentSection: SECTIONS.QUIZ
  }, updateUI);
});
resetCertificateBtnElement.addEventListener('click', function () {
  chrome.storage.sync.set({
    currentSection: SECTIONS.BUTTONS,
    videoCompleted: false,
    videoProgress: 0,
    CCC: null
  }, function () {
    console.log('Progress reset successfully.');
    updateUI();
  });
});
resetQuizButtonElement.addEventListener('click', function () {
  chrome.storage.sync.set({
    currentSection: SECTIONS.BUTTONS
  }, function () {
    updateUI();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get(['currentSection'], function (data) {
    if (!data.currentSection) {
      chrome.storage.sync.set({
        currentSection: SECTIONS.BUTTONS
      }, updateUI);
    } else {
      updateUI();
    }
  });
});
function updateUI() {
  chrome.storage.sync.get(['currentSection', 'videoCompleted', 'username'], function (data) {
    var currentSection = data.currentSection || SECTIONS.BUTTONS;
    var videoCompleted = data.videoCompleted || false;

    // certificateSection.style.display = 'none';
    // quizSection.style.display = 'none';
    // buttonContainerElement.style.display = 'none';
    // GeneratecertificatesectionElement.style.display = 'none';
    // generatedcertificatesectionElemet.style.display = 'none';

    // Update visibility based on current section
    if (currentSection === SECTIONS.CERTIFICATE) {
      certificateSection.style.display = 'block';
      Hidebuttons();
    } else if (currentSection === SECTIONS.QUIZ) {
      quizSection.style.display = 'block';
      Hidebuttons();
    } else if (currentSection === SECTIONS.BUTTONS) {
      quizSection.style.display = 'none';
      certificateSection.style.display = 'none';
      buttonContainerElement.style.display = 'block';
    }
  });
}
var Hidebuttons = function Hidebuttons() {
  buttonContainerElement.style.display = 'none';
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztBQUN4RSxJQUFNQyxrQkFBa0IsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7QUFDeEUsSUFBTUUsc0JBQXNCLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0FBRXpFLElBQU1HLGtCQUFrQixHQUFHSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztBQUd4RSxJQUFNSSw2QkFBNkIsR0FBR0wsUUFBUSxDQUFDQyxjQUFjLENBQUMsd0JBQXdCLENBQUM7QUFDdkYsSUFBTUssV0FBVyxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFFMUQsSUFBTU0sMEJBQTBCLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLHdCQUF3QixDQUFDO0FBQ3BGLElBQU1PLHNCQUFzQixHQUFHUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUV6RSxJQUFNUSxRQUFRLEdBQUc7RUFDYkMsT0FBTyxFQUFFLEtBQUs7RUFDZEMsV0FBVyxFQUFFLGFBQWE7RUFDMUJDLElBQUksRUFBRTtBQUNSLENBQUM7QUFHSGIsa0JBQWtCLENBQUNjLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQy9DQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUM7SUFBRUMsY0FBYyxFQUFFVCxRQUFRLENBQUNFO0VBQVksQ0FBQyxFQUFFUSxRQUFRLENBQUM7QUFDN0UsQ0FBQyxDQUFDO0FBR0ZqQixrQkFBa0IsQ0FBQ1csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDakRDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQztJQUFFQyxjQUFjLEVBQUVULFFBQVEsQ0FBQ0c7RUFBSyxDQUFDLEVBQUVPLFFBQVEsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFNRlosMEJBQTBCLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3pEQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUM7SUFBRUMsY0FBYyxFQUFFVCxRQUFRLENBQUNDLE9BQU87SUFBRVUsY0FBYyxFQUFFLEtBQUs7SUFBRUMsYUFBYSxFQUFFLENBQUM7SUFBRUMsR0FBRyxFQUFDO0VBQUssQ0FBQyxFQUFFLFlBQU07SUFDckhDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDTCxRQUFRLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGWCxzQkFBc0IsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDckRDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQztJQUFFQyxjQUFjLEVBQUVULFFBQVEsQ0FBQ0M7RUFBTyxDQUFDLEVBQUUsWUFBTTtJQUNqRVMsUUFBUSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFHSm5CLFFBQVEsQ0FBQ2EsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoREMsTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQ1MsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxVQUFDQyxJQUFJLEVBQUs7SUFDcEQsSUFBSSxDQUFDQSxJQUFJLENBQUNSLGNBQWMsRUFBRTtNQUN4QkosTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDO1FBQUVDLGNBQWMsRUFBRVQsUUFBUSxDQUFDQztNQUFRLENBQUMsRUFBRVMsUUFBUSxDQUFDO0lBQ3pFLENBQUMsTUFBTTtNQUNMQSxRQUFRLENBQUMsQ0FBQztJQUNaO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBTUYsU0FBU0EsUUFBUUEsQ0FBQSxFQUFHO0VBQ2xCTCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDUyxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLENBQUMsRUFBRSxVQUFDQyxJQUFJLEVBQUs7SUFDaEYsSUFBTVIsY0FBYyxHQUFHUSxJQUFJLENBQUNSLGNBQWMsSUFBSVQsUUFBUSxDQUFDQyxPQUFPO0lBQzlELElBQU1VLGNBQWMsR0FBR00sSUFBSSxDQUFDTixjQUFjLElBQUksS0FBSzs7SUFFbkQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtJQUNBLElBQUlGLGNBQWMsS0FBS1QsUUFBUSxDQUFDRSxXQUFXLEVBQUU7TUFDM0NQLGtCQUFrQixDQUFDdUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztNQUMxQ0MsV0FBVyxDQUFDLENBQUM7SUFDZixDQUFDLE1BQU0sSUFBSVgsY0FBYyxLQUFLVCxRQUFRLENBQUNHLElBQUksRUFBRTtNQUMzQ04sV0FBVyxDQUFDcUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztNQUNuQ0MsV0FBVyxDQUFDLENBQUM7SUFDZixDQUFDLE1BQU0sSUFBSVgsY0FBYyxLQUFLVCxRQUFRLENBQUNDLE9BQU8sRUFBRTtNQUM5Q0osV0FBVyxDQUFDcUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUNsQ3hCLGtCQUFrQixDQUFDdUIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUN6Q3pCLHNCQUFzQixDQUFDd0IsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztJQUNoRDtFQUNGLENBQUMsQ0FBQztBQUNKO0FBU0YsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztFQUN4QjFCLHNCQUFzQixDQUFDd0IsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtBQUMvQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRnJvbnRlbmQvVWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGVmaW5lIGVsZW1lbnRzXHJcbmNvbnN0IHdhdGNoQ2VydGlmeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YXRjaENlcnRpZnlCdXR0b24nKTtcclxuY29uc3QgZ2VuZXJhdGVRdWl6QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlUXVpekJ1dHRvbicpO1xyXG5jb25zdCBidXR0b25Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbkNvbnRhaW5lcicpO1xyXG5cclxuY29uc3QgY2VydGlmaWNhdGVTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlcnRpZmljYXRlU2VjdGlvbicpO1xyXG5cclxuXHJcbmNvbnN0IGdlbmVyYXRlQ2VydGlmaWNhdGVidG5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlQ2VydGlmaWNhdGVidG4nKVxyXG5jb25zdCBxdWl6U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6U2VjdGlvbicpO1xyXG5cclxuY29uc3QgcmVzZXRDZXJ0aWZpY2F0ZUJ0bkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRDZXJ0aWZpY2F0ZUJ1dHRvbicpXHJcbmNvbnN0IHJlc2V0UXVpekJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXRRdWl6QnV0dG9uJylcclxuXHJcbmNvbnN0IFNFQ1RJT05TID0ge1xyXG4gICAgQlVUVE9OUzogJ0J0bicsXHJcbiAgICBDRVJUSUZJQ0FURTogJ2NlcnRpZmljYXRlJyxcclxuICAgIFFVSVo6ICdxdWl6JyxcclxuICB9O1xyXG5cclxuXHJcbndhdGNoQ2VydGlmeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgY3VycmVudFNlY3Rpb246IFNFQ1RJT05TLkNFUlRJRklDQVRFIH0sIHVwZGF0ZVVJKTtcclxuICB9KTtcclxuICBcclxuIFxyXG4gIGdlbmVyYXRlUXVpekJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgY3VycmVudFNlY3Rpb246IFNFQ1RJT05TLlFVSVogfSwgdXBkYXRlVUkpO1xyXG4gIH0pO1xyXG5cclxuICBcclxuXHJcblxyXG5cclxuICByZXNldENlcnRpZmljYXRlQnRuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgY3VycmVudFNlY3Rpb246IFNFQ1RJT05TLkJVVFRPTlMsIHZpZGVvQ29tcGxldGVkOiBmYWxzZSwgdmlkZW9Qcm9ncmVzczogMCwgQ0NDOm51bGwgfSwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnUHJvZ3Jlc3MgcmVzZXQgc3VjY2Vzc2Z1bGx5LicpO1xyXG4gICAgICB1cGRhdGVVSSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJlc2V0UXVpekJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGN1cnJlbnRTZWN0aW9uOiBTRUNUSU9OUy5CVVRUT05TfSwgKCkgPT4ge1xyXG4gICAgICB1cGRhdGVVSSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsnY3VycmVudFNlY3Rpb24nXSwgKGRhdGEpID0+IHtcclxuICAgICAgaWYgKCFkYXRhLmN1cnJlbnRTZWN0aW9uKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBjdXJyZW50U2VjdGlvbjogU0VDVElPTlMuQlVUVE9OUyB9LCB1cGRhdGVVSSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXBkYXRlVUkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoWydjdXJyZW50U2VjdGlvbicsJ3ZpZGVvQ29tcGxldGVkJywndXNlcm5hbWUnXSwgKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBkYXRhLmN1cnJlbnRTZWN0aW9uIHx8IFNFQ1RJT05TLkJVVFRPTlM7XHJcbiAgICAgIGNvbnN0IHZpZGVvQ29tcGxldGVkID0gZGF0YS52aWRlb0NvbXBsZXRlZCB8fCBmYWxzZTtcclxuICAgXHJcbiAgICAgIC8vIGNlcnRpZmljYXRlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAvLyBxdWl6U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAvLyBidXR0b25Db250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIC8vIEdlbmVyYXRlY2VydGlmaWNhdGVzZWN0aW9uRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAvLyBnZW5lcmF0ZWRjZXJ0aWZpY2F0ZXNlY3Rpb25FbGVtZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBcclxuICAgICAgLy8gVXBkYXRlIHZpc2liaWxpdHkgYmFzZWQgb24gY3VycmVudCBzZWN0aW9uXHJcbiAgICAgIGlmIChjdXJyZW50U2VjdGlvbiA9PT0gU0VDVElPTlMuQ0VSVElGSUNBVEUpIHtcclxuICAgICAgICBjZXJ0aWZpY2F0ZVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgSGlkZWJ1dHRvbnMoKTtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50U2VjdGlvbiA9PT0gU0VDVElPTlMuUVVJWikge1xyXG4gICAgICAgIHF1aXpTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIEhpZGVidXR0b25zKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFNlY3Rpb24gPT09IFNFQ1RJT05TLkJVVFRPTlMpIHtcclxuICAgICAgICBxdWl6U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNlcnRpZmljYXRlU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcblxyXG5cclxuY29uc3QgSGlkZWJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgYnV0dG9uQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbIndhdGNoQ2VydGlmeUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZW5lcmF0ZVF1aXpCdXR0b24iLCJidXR0b25Db250YWluZXJFbGVtZW50IiwiY2VydGlmaWNhdGVTZWN0aW9uIiwiZ2VuZXJhdGVDZXJ0aWZpY2F0ZWJ0bkVsZW1lbnQiLCJxdWl6U2VjdGlvbiIsInJlc2V0Q2VydGlmaWNhdGVCdG5FbGVtZW50IiwicmVzZXRRdWl6QnV0dG9uRWxlbWVudCIsIlNFQ1RJT05TIiwiQlVUVE9OUyIsIkNFUlRJRklDQVRFIiwiUVVJWiIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsInNldCIsImN1cnJlbnRTZWN0aW9uIiwidXBkYXRlVUkiLCJ2aWRlb0NvbXBsZXRlZCIsInZpZGVvUHJvZ3Jlc3MiLCJDQ0MiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiZGF0YSIsInN0eWxlIiwiZGlzcGxheSIsIkhpZGVidXR0b25zIl0sInNvdXJjZVJvb3QiOiIifQ==