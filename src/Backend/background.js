chrome.runtime.onInstalled.addListener(() => {
  console.log('YouTube Completion Tracker Extension Installed');
  
  chrome.storage.sync.set({
    videoProgress: 0,
    videoCompleted: false,
    title: ''
  }, () => {
    if (chrome.runtime.lastError) {
      console.error('Error initializing storage:', chrome.runtime.lastError);
    }
  });
});

