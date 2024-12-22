import { GoogleGenerativeAI } from "@google/generative-ai";

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
  setTimeout(initializeVideoTracking, 1000);

  const submitQuestion = document.getElementById('submitQuestion');
  submitQuestion.addEventListener('click', function() {
      const Prompt = document.getElementById('userQuestion').value;
      async function executePrompt(Prompt) {
          const summariesContainer = document.getElementById('videoD');
          summariesContainer.innerHTML = 'Processing...';

          // Function to get AI response
          async function getGeminiResponse(content) {
              const apiKey = `AIzaSyB1rICUSO4GYdpzY-dkX_kcdRubBplApCI`;
              const genAI = new GoogleGenerativeAI(apiKey);
              const model = genAI.getGenerativeModel({ model: "gemini-pro" });
              const fullContent = content;
              try {
                  const result = await model.generateContent(fullContent);
                  const response = await result.response;
                  const textResponse = await response.text();
                  summariesContainer.innerHTML = textResponse;
              } catch (error) {
                  console.error('Error generating processing:', error);
                  summariesContainer.innerHTML = 'Error processing your request.';
              }
          }

          await getGeminiResponse(Prompt);
      }
      executePrompt(Prompt);
  });
};