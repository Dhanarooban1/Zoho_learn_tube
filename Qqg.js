// Simplified Script to Test Gemini API Response
const userQuestionElement = document.getElementById('userQuestion');
const submitQuestionButtonElement = document.getElementById('submitQuestion');
const responseElement = document.getElementById('response'); // Changed ID to 'response' - avoid potential conflict


let apiKey = "AIzaSyAvn0D4WLk11s71EisxvyQRJYmKFXMnI6k"; // Replace with your actual key

//CORRECTED API URL
const API_URL = "https://us-central1-gemini-harness.cloudfunctions.net/gemini"; // use the correct endpoint


submitQuestionButtonElement.addEventListener('click', async () => {
    const query = userQuestionElement.value;

    if (!query) {
        responseElement.innerText = "Please enter a question.";
        return;
    }

    try {
        responseElement.innerText = "Loading...";

        if (!apiKey) {
            throw new Error("Please provide an API Key.");
        }

        const response = await getGeminiResponse(query);

        // Handle Gemini's response structure.  This is more robust and handles different response types.
        if (response && response.results && response.results.length > 0) {
            // Gemini might return an array of results
            const firstResult = response.results[0];
            if (firstResult.text) {
              responseElement.innerText = firstResult.text;
            } else if (firstResult.image) {
              // Handle image response, maybe display in an img tag
              responseElement.innerHTML = `<img src="${firstResult.image}" alt="Gemini Image Response">`;
            } else {
              responseElement.innerText = `Unexpected result structure: ${JSON.stringify(firstResult)}`;
            }
          } else if (response.error) {
            // Handle error messages returned from Gemini.
            responseElement.innerText = `Gemini API Error: ${response.error.message}`;
          } else {
            responseElement.innerText = `No valid response from Gemini. Response: ${JSON.stringify(response)}`;
        }
    } catch (error) {
        responseElement.innerText = `Error: ${error.message}`;
        console.error("Error interacting with Gemini API:", error); // Log error for debugging
    }
});

async function getGeminiResponse(prompt) {
    const requestBody = {
        "prompt": prompt
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        const errorText = `HTTP error! status: ${response.status}, message: ${await response.text()}`;
        throw new Error(errorText);
    }

    return await response.json();
}