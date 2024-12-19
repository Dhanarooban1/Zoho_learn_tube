// content.js
window.onload = function() {
  // Check if we're in a Chrome extension context
  if (typeof chrome === 'undefined' || !chrome.runtime) {
      console.warn('Chrome extension APIs are not available');
      return;
  }

  // Function to safely send messages
  function sendMessageToBackground(message) {
      try {
          chrome.runtime.sendMessage(message, function(response) {
              if (chrome.runtime.lastError) {
                  console.warn('Error sending message:', chrome.runtime.lastError);
                  return;
              }
              // Handle response if needed
          });
      } catch (error) {
          console.warn('Error in sendMessage:', error);
      }
  }

  // Function to safely store data
  function safelyStoreProgress(progress, title) {
      try {
          chrome.storage.sync.set({ 
              videoProgress: progress,
              title: title
          }, () => {
              if (chrome.runtime.lastError) {
                  console.warn('Error storing progress:', chrome.runtime.lastError);
                  return;
              }
              console.log('Progress stored:', progress);
          });
      } catch (error) {
          console.warn('Error in storage:', error);
      }
  }

  // Initialize video tracking
  function initializeVideoTracking() {
      const videoElement = document.querySelector('video');
      if (!videoElement) {
          console.warn("No video element found.");
          return;
      }

      videoElement.addEventListener('timeupdate', () => {
          const progress = (videoElement.currentTime / videoElement.duration) * 100;
          const videoTitle = document.title;
          const progressFixed = progress.toFixed(2);

          // Send message to background
          sendMessageToBackground({
              type: "progress_update",
              videoProgress: progressFixed,
              videoTitle: videoTitle
          });

          // Store progress
          safelyStoreProgress(progressFixed, videoTitle);

          // Handle video completion
          if (progress >= 99.9) {
              try {
                  chrome.storage.sync.set({ videoCompleted: true }, () => {
                      if (chrome.runtime.lastError) {
                          console.warn('Error storing completion:', chrome.runtime.lastError);
                      }
                  });
              } catch (error) {
                  console.warn('Error storing completion:', error);
              }
          }
      });
  }

  // Start tracking after a small delay to ensure everything is loaded
  setTimeout(initializeVideoTracking, 1000);
};