/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/Backend/background.js ***!
  \***********************************/
chrome.runtime.onInstalled.addListener(function () {
  console.log('YouTube Completion Tracker Extension Installed');
  chrome.storage.sync.set({
    videoProgress: 0,
    videoCompleted: false,
    title: ''
  }, function () {
    if (chrome.runtime.lastError) {
      console.error('Error initializing storage:', chrome.runtime.lastError);
    }
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBQSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXLENBQUMsWUFBTTtFQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0RBQWdELENBQUM7RUFFN0RMLE1BQU0sQ0FBQ00sT0FBTyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQztJQUN0QkMsYUFBYSxFQUFFLENBQUM7SUFDaEJDLGNBQWMsRUFBRSxLQUFLO0lBQ3JCQyxLQUFLLEVBQUU7RUFDVCxDQUFDLEVBQUUsWUFBTTtJQUNQLElBQUlYLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDVyxTQUFTLEVBQUU7TUFDNUJSLE9BQU8sQ0FBQ1MsS0FBSyxDQUFDLDZCQUE2QixFQUFFYixNQUFNLENBQUNDLE9BQU8sQ0FBQ1csU0FBUyxDQUFDO0lBQ3hFO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQmFja2VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKCgpID0+IHtcclxuICBjb25zb2xlLmxvZygnWW91VHViZSBDb21wbGV0aW9uIFRyYWNrZXIgRXh0ZW5zaW9uIEluc3RhbGxlZCcpO1xyXG4gIFxyXG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtcclxuICAgIHZpZGVvUHJvZ3Jlc3M6IDAsXHJcbiAgICB2aWRlb0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICB0aXRsZTogJydcclxuICB9LCAoKSA9PiB7XHJcbiAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluaXRpYWxpemluZyBzdG9yYWdlOicsIGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuIl0sIm5hbWVzIjpbImNocm9tZSIsInJ1bnRpbWUiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInN0b3JhZ2UiLCJzeW5jIiwic2V0IiwidmlkZW9Qcm9ncmVzcyIsInZpZGVvQ29tcGxldGVkIiwidGl0bGUiLCJsYXN0RXJyb3IiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=