
import { GoogleGenerativeAI } from "@google/generative-ai";

// Get the submit button element
const submitQuestion = document.getElementById('Summarybtn');

// Add event listener to handle the submit button click
submitQuestion.addEventListener('click', function () {
    chrome.storage.sync.get(['title'], async (result) => {
        if (chrome.runtime.lastError) {
            console.warn('Error getting data:', chrome.runtime.lastError);
            return;
        }

        const videoTitle = result.title;

        if (videoTitle !== undefined) {
            // Call the function to generate a summary using the video title
            await executePrompt(videoTitle);
        } else {
            console.warn('Data not found in storage');
        }
    });
});

// Function to execute the AI prompt and get the summary
async function executePrompt(videoTitle) {
    const summariesContainer = document.getElementById('videoD');
    summariesContainer.innerHTML = 'Processing...';

    // Create the prompt with the video title
    console.log(videoTitle);
    const prompt = `Please summarize the content of the YouTube video titled '${videoTitle}'. Provide a concise overview of the main points, key topics discussed, and any relevant details. Avoid unnecessary details and focus on the core message of the video. I want you to get a short summary using the given title`;

    // Function to get AI response using Gemini API
    async function getGeminiResponse(content) {

        const apiKey = `AIzaSyB1rICUSO4GYdpzY-dkX_kcdRubBplApCI`; // Replace with your API key or use a secure method to fetch it
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        try {
            // Generate content based on the prompt
            const result = await model.generateContent(content);
            let responseText = await result.response.text();
            responseText = responseText
                .replace(/\*\*/g, '') // Remove **
                .replace(/\*/g, '')   // Remove single *
                .replace(/'{2,}/g, '') // Remove multiple single quotes
                .replace(/"{2,}/g, '') // Remove multiple double quotes
                .split('\n')
                .map(line => line.trim())
                .filter(line => line)
                .join('<br><br>');

            // Apply styling to the response
            summariesContainer.innerHTML = `
                <div style="
                    line-height: 1.8;
                    color: #2d3748;
                    font-size: 16px;">
                    ${responseText}
                </div>`;
             // Display the AI response in the container
        } catch (error) {
            console.error('Error generating processing:', error);
            summariesContainer.innerHTML = 'Error processing your request.';
        }
    }

    // Get the Gemini AI response with the constructed prompt
    await getGeminiResponse(prompt);
}
