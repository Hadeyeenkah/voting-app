// js/face-verification.js

// Access the webcam and stream to video element
const video = document.getElementById('webcam');
const canvas = document.getElementById('snapshotCanvas');
const captureBtn = document.getElementById('captureBtn');
const verifyBtn = document.getElementById('verifyBtn');
const verificationResult = document.getElementById('verificationResult');

// Check if the browser supports getUserMedia
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error('Error accessing webcam: ', err);
    verificationResult.textContent = 'Error accessing webcam. Please check your camera settings.';
  });

// Capture image from the webcam
captureBtn.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    // Display the captured image for review (optional)
    canvas.style.display = 'block';
});

// Simulate face verification process (this is where you would connect to an actual face verification API)
verifyBtn.addEventListener('click', () => {
    // For now, simulate verification with a placeholder message
    verificationResult.textContent = 'Face verification successful!';
});

