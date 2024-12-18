
window.onload = function () {
  let videoElement = document.querySelector('video');
  if (!videoElement) return; // Ensure video element exists

  videoElement.addEventListener('timeupdate', () => {
      let progress = (videoElement.currentTime / videoElement.duration) * 100;
      let videoTitle = document.title;

      chrome.runtime.sendMessage({
        type: "progress_update",
        videoProgress: progress.toFixed(2),
        videoTitle: videoTitle
    });
    
      chrome.storage.sync.set({ videoProgress: progress.toFixed(2),title: videoTitle}, () => {
          console.log('Progress stored:', progress.toFixed(2));
      });

      if (progress === 100) {
          chrome.storage.sync.set({ videoCompleted: true }, () => {
             
          });
      }
  });
};
