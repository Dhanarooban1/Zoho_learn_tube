
window.onload = function() {
  if (typeof chrome === 'undefined' || !chrome.runtime) {
      console.warn('Chrome extension APIs are not available');
      return;
  }
  function sendMessageToBackground(message) {
      try {
          chrome.runtime.sendMessage(message, function(response) {
              if (chrome.runtime.lastError) {
                  console.warn('Error sending message:', chrome.runtime.lastError);
                  return;
              }
             
          });
      } catch (error) {
          console.warn('Error in sendMessage:', error);
      }
  }


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

 
  function initializeVideoTracking() {
      const videoElement = document.querySelector('video');
      if (!videoElement) {
          console.warn("No video element found.");
          return;
      }

      videoElement.addEventListener('timeupdate', () => {
        chrome.storage.sync.get(['videoCompleted'], (result) => {
            if (result.videoCompleted) {
                return;
            }
            const progress = (videoElement.currentTime / videoElement.duration) * 100;
            const videoTitle = document.title;
            const progressFixed = progress.toFixed(2);
            sendMessageToBackground({
                type: "progress_update",
                videoProgress: progressFixed,
                videoTitle: videoTitle
            });
            safelyStoreProgress(progressFixed, videoTitle);
    
            if (progress == 100) {
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
    });
    
  }

  // Start tracking after a small delay to ensure everything is loaded
  setTimeout(initializeVideoTracking, 1000);
};