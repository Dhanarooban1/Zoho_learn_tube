document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitQuestion').addEventListener('click', async () => {
      const userInput = document.getElementById('userQuestion').value;
      const responseDiv = document.getElementById('responseArea');
  
      try {
        // Replace with your actual API key
        const apiKey = 'AIzaSyBEFAS-bP9TG26-mTyClTLzTWJzhtZ2BCw';
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`; // Use correct model name
  
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            prompt: {
              text: userInput // Wrap the user input in the TextPrompt object
            },
            temperature: 0.7, // Optional: Creativity level
            candidateCount: 1, // Optional: Number of output candidates
            maxOutputTokens: 200 // Optional: Output length limit
          })
        });
  
        if (!response.ok) {
          const errorData = await response.json(); // Try to get more detailed error information
          throw new Error(`HTTP error! status: ${response.status} ${JSON.stringify(errorData)}`);
        }
  
        const data = await response.json();
        responseDiv.textContent = data.candidates[0].output; // Assuming the API structure, check docs.
      } catch (error) {
        responseDiv.textContent = `Error: ${error.message}`;
        console.error('Error:', error);
      }
    });
  });
  