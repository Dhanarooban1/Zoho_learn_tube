// Course Generator: Generates YouTube Video Links

import { GoogleGenerativeAI } from "@google/generative-ai";

const submitQuestion = document.getElementById('GenerateVideoLinksBtn');

submitQuestion.addEventListener('click', async function () {
    const userInput = document.getElementById('UserInput').value.trim();

    if (!userInput) {
        alert('Please enter a topic.');
        return;
    }

    const prompt = `
        Provide YouTube video links (URLs) for the following topic: "${userInput}". 
        List 5 relevant videos, each on a separate line.  Do not include anything other than the URLs.
		If you can't find 5 suitable videos, provide as many as possible.
		Return ONLY the URLs.
		`;

    try {
        const videoLinks = await executePrompt(prompt);
        const responseText = document.getElementById('videoDetails');

        if (responseText) { 
            videoContainer.innerHTML = `
                <h2>YouTube Video Links for: ${userInput}</h2>
                <ol>
                    ${responseText}
                </ol>
            `;
        } else {
            videoContainer.innerHTML = `No relevant YouTube video links found for "${userInput}".`;
        }

    } catch (error) {
        console.error('Error generating video links:', error);
		videoContainer.innerHTML = `Error: ${error.message}`; 
    }
});


async function executePrompt(prompt) {
    const apiKey = `AIzaSyB1rICUSO4GYdpzY-dkX_kcdRubBplApCI`;// Replace with your API key
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
        const result = await model.generateContent(prompt);
        const responseText = await result.response.text();
        console.log(responseText)
        return responseText;

    } catch (error) {
        console.error('Error processing request with Gemini AI:', error);
        throw error; // crucial to propagate the error to the caller.
    }
}