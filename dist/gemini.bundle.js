/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/Frontend/Gemini.js ***!
  \********************************/
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
          temperature: 0.7,
          // Optional: Creativity level
          candidateCount: 1,
          // Optional: Number of output candidates
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VtaW5pLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREQsUUFBUSxDQUFDRSxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDOUUsTUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNFLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQ0UsS0FBSztJQUMvRCxNQUFNQyxXQUFXLEdBQUdMLFFBQVEsQ0FBQ0UsY0FBYyxDQUFDLGNBQWMsQ0FBQztJQUUzRCxJQUFJO01BQ0Y7TUFDQSxNQUFNSSxNQUFNLEdBQUcseUNBQXlDO01BQ3hELE1BQU1DLE1BQU0sR0FBRyw0RkFBNEZELE1BQU0sRUFBRSxDQUFDLENBQUM7O01BRXJILE1BQU1FLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNGLE1BQU0sRUFBRTtRQUNuQ0csTUFBTSxFQUFFLE1BQU07UUFDZEMsT0FBTyxFQUFFO1VBQ1AsY0FBYyxFQUFFO1FBQ2xCLENBQUM7UUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztVQUNuQkMsTUFBTSxFQUFFO1lBQ05DLElBQUksRUFBRWIsU0FBUyxDQUFDO1VBQ2xCLENBQUM7VUFDRGMsV0FBVyxFQUFFLEdBQUc7VUFBRTtVQUNsQkMsY0FBYyxFQUFFLENBQUM7VUFBRTtVQUNuQkMsZUFBZSxFQUFFLEdBQUcsQ0FBQztRQUN2QixDQUFDO01BQ0gsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDWCxRQUFRLENBQUNZLEVBQUUsRUFBRTtRQUNoQixNQUFNQyxTQUFTLEdBQUcsTUFBTWIsUUFBUSxDQUFDYyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxJQUFJQyxLQUFLLENBQUMsdUJBQXVCZixRQUFRLENBQUNnQixNQUFNLElBQUlYLElBQUksQ0FBQ0MsU0FBUyxDQUFDTyxTQUFTLENBQUMsRUFBRSxDQUFDO01BQ3hGO01BRUEsTUFBTUksSUFBSSxHQUFHLE1BQU1qQixRQUFRLENBQUNjLElBQUksQ0FBQyxDQUFDO01BQ2xDakIsV0FBVyxDQUFDcUIsV0FBVyxHQUFHRCxJQUFJLENBQUNFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDLE9BQU9DLEtBQUssRUFBRTtNQUNkeEIsV0FBVyxDQUFDcUIsV0FBVyxHQUFHLFVBQVVHLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO01BQ25EQyxPQUFPLENBQUNGLEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQztJQUNoQztFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL0Zyb250ZW5kL0dlbWluaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFF1ZXN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyUXVlc3Rpb24nKS52YWx1ZTtcclxuICAgICAgY29uc3QgcmVzcG9uc2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzcG9uc2VBcmVhJyk7XHJcbiAgXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gUmVwbGFjZSB3aXRoIHlvdXIgYWN0dWFsIEFQSSBrZXlcclxuICAgICAgICBjb25zdCBhcGlLZXkgPSAnQUl6YVN5QkVGQVMtYlA5VEcyNi1tVHlDbFRMelRXSnpodFoyQkN3JztcclxuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9nZW5lcmF0aXZlbGFuZ3VhZ2UuZ29vZ2xlYXBpcy5jb20vdjFiZXRhMi9tb2RlbHMvdGV4dC1iaXNvbi0wMDE6Z2VuZXJhdGVUZXh0P2tleT0ke2FwaUtleX1gOyAvLyBVc2UgY29ycmVjdCBtb2RlbCBuYW1lXHJcbiAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBwcm9tcHQ6IHtcclxuICAgICAgICAgICAgICB0ZXh0OiB1c2VySW5wdXQgLy8gV3JhcCB0aGUgdXNlciBpbnB1dCBpbiB0aGUgVGV4dFByb21wdCBvYmplY3RcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IDAuNywgLy8gT3B0aW9uYWw6IENyZWF0aXZpdHkgbGV2ZWxcclxuICAgICAgICAgICAgY2FuZGlkYXRlQ291bnQ6IDEsIC8vIE9wdGlvbmFsOiBOdW1iZXIgb2Ygb3V0cHV0IGNhbmRpZGF0ZXNcclxuICAgICAgICAgICAgbWF4T3V0cHV0VG9rZW5zOiAyMDAgLy8gT3B0aW9uYWw6IE91dHB1dCBsZW5ndGggbGltaXRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBUcnkgdG8gZ2V0IG1vcmUgZGV0YWlsZWQgZXJyb3IgaW5mb3JtYXRpb25cclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpfWApO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlc3BvbnNlRGl2LnRleHRDb250ZW50ID0gZGF0YS5jYW5kaWRhdGVzWzBdLm91dHB1dDsgLy8gQXNzdW1pbmcgdGhlIEFQSSBzdHJ1Y3R1cmUsIGNoZWNrIGRvY3MuXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzcG9uc2VEaXYudGV4dENvbnRlbnQgPSBgRXJyb3I6ICR7ZXJyb3IubWVzc2FnZX1gO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwidXNlcklucHV0IiwidmFsdWUiLCJyZXNwb25zZURpdiIsImFwaUtleSIsImFwaVVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwcm9tcHQiLCJ0ZXh0IiwidGVtcGVyYXR1cmUiLCJjYW5kaWRhdGVDb3VudCIsIm1heE91dHB1dFRva2VucyIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsInRleHRDb250ZW50IiwiY2FuZGlkYXRlcyIsIm91dHB1dCIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9