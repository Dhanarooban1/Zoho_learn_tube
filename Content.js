window.onload = function () {
  let videoElement = document.querySelector('video');
  if (!videoElement) return; // Ensure video element exists

  videoElement.addEventListener('timeupdate', () => {
      let progress = (videoElement.currentTime / videoElement.duration) * 100;
      let videoTitle = document.title;
      chrome.storage.local.set({ videoProgress: progress.toFixed(2),title: videoTitle}, () => {
          console.log('Progress stored:', progress.toFixed(2));
      });

      if (progress === 100) {
          chrome.storage.local.set({ videoCompleted: true }, () => {
             
          });
      }
  });
};
