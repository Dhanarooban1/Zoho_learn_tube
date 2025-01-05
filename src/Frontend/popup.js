import logoBase6 from "../Frontend/BaseImage" 

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateCertificatebtn');
    const generatecertificatesectionElement = document.getElementById('Generatecertificatesection')
    const generatedcertificatesectionElement  = document.getElementById('generatedcertificatesection')
    const progressElement = document.getElementById('progressBar');
    const certificateElement = document.getElementById('certificateDiv');
    const userNameInput = document.getElementById('userName');
    const downloadButton = document.getElementById('downloadCertificateButton');
    const shareButton = document.getElementById('shareLinkedInButton');
    let certificateContent = ''; 

    // Function to update progress display add this to ui page 


    function updateProgressDisplay(progress) {
        if (typeof progress === 'number' && !isNaN(progress)) {
            chrome.storage.sync.get(['videoCompleted','CCC'], (result) => {
                if (result.videoCompleted) {
                    progressElement.textContent = `Video Progress: 100% (Certificate Generated)`;
                        generatecertificatesectionElement.style.display = 'block';
                } else {
                    progressElement.textContent = `Video Progress: ${Math.round(progress)}%`;
                }
            });
        } else {
            progressElement.textContent = 'Welcome! Start watching videos';
        }
    }

    chrome.storage.sync.get(['title', 'videoProgress', 'videoCompleted'], (result) => {
        if (chrome.runtime.lastError) {
            console.error('Error fetching initial progress:', chrome.runtime.lastError);
            updateProgressDisplay(null);
            return;
        }
        const progress = parseFloat(result.videoProgress) || 0;
        updateProgressDisplay(progress);

            generateButton.addEventListener('click', () => {
                const userName = userNameInput.value.trim();
                console.log(userName)
                if (userName) {
                    chrome.storage.sync.get(['title'], (result) => {
                        if (!chrome.runtime.lastError && result.title) {
                            generateCertificate(userName, result.title);

                        } else {
                            console.error('Failed to get video title');
                            alert('Failed to generate certificate. Please try again.');
                        }
                    });
                } else {
                    alert('Please enter your name');
                }
            });
    
    });


   
   
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === 'progress_update' && message.videoProgress !== undefined) {
            const progress = parseFloat(message.videoProgress);
            updateProgressDisplay(progress);
        }
        sendResponse({ received: true });
        return true; // Keeps the message channel open for async responses
    });

    
        
    if (!logoBase6) {
        console.error('logoBase6 variable not found');
        return;
    }


    function generateCertificate(userName, title) {
        certificateContent = `
          <div style="max-width: 800px; margin: auto; padding: 40px; font-family: 'Arial', sans-serif; background-color: #f9f9f9; border: 2px solid #e0e0e0; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); position: relative; overflow: hidden; text-align: center; background-image: url('${logoBase6}'); background-size: cover; background-position: center;">
            <!-- Background overlay for better text readability -->
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.95); z-index: 1;"></div>
            
            <!-- Logo Section -->
            <img src="${logoBase6}" alt="Zoho Logo" style="width: 100px; margin-bottom: 20px; position: relative; z-index: 2;">
            
            <!-- Certificate Title -->
            <h1 style="color: #2c3e50; font-size: 28px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; position: relative; z-index: 2;">Certificate of Achievement</h1>
            
            <!-- Subtext -->
            <p style="font-size: 16px; color: #7f8c8d; margin: 10px 0; position: relative; z-index: 2;">This is to certify that</p>
            
            <!-- User's Name -->
            <h2 style="font-size: 24px; color: #34495e; font-weight: bold; margin: 5px 0; text-transform: capitalize; position: relative; z-index: 2;">${userName}</h2>
            
            <!-- Course Completion Text -->
            <p style="font-size: 16px; color: #7f8c8d; margin: 10px 0; position: relative; z-index: 2;">has successfully completed the course</p>
            
            <!-- Course Title -->
            <h3 style="font-size: 20px; color: #2980b9; font-weight: 600; font-style: italic; margin-bottom: 20px; position: relative; z-index: 2;">"${title}"</h3>
            
            <!-- Date Section -->
            <p style="font-size: 16px; color: #7f8c8d; margin: 10px 0; position: relative; z-index: 2;">on</p>
            <p style="font-size: 14px; color: #2c3e50; font-weight: 600; position: relative; z-index: 2;">Date: ${new Date().toLocaleDateString()}</p>
            
            <!-- Signature and Footer -->
            <div style="margin-top: 30px; position: relative; z-index: 2;">
                <div style="border-top: 1px solid #bdc3c7; width: 50%; margin: 20px auto 10px; position: relative;"></div>
            </div>
        </div>
        `;
        
        try {
            chrome.storage.sync.set({ CCC: certificateContent }, () => {
                chrome.storage.sync.get(['CCC'], (result) => {
                    if (result.CCC) {
                        certificateElement.innerHTML = result.CCC;
                    }
                });
            });
        } catch (error) {
            console.error('Unexpected error:', error);
        }
        
        downloadButton.style.display = 'inline-block';
        shareButton.style.display = 'inline-block';
    generatedcertificatesectionElement.style.display = 'block';
    generatecertificatesectionElement.style.display = 'none';
    }

    function downloadCertificate() {
        const link = document.createElement('a');
        link.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(certificateContent);
        link.download = 'certificate.html';
        link.click();
    }

    function shareOnLinkedIn() {
        const certificateUrl = window.location.href;
        const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(certificateUrl)}`;
        window.open(linkedinShareUrl, '_blank');
    }

    // Add event listeners for download and share buttons
    downloadButton.addEventListener('click', downloadCertificate);
    shareButton.addEventListener('click', shareOnLinkedIn);
});