// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("YouTube Completion Tracker Extension Installed");
  
  // Initialize storage with default values
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

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "progress_update") {
      // Handle progress update
      console.log("Progress update received:", message.videoProgress);
      sendResponse({ received: true });
  }
  // Return true to indicate we'll send a response asynchronously
  return true;
});