const apiUrl = "https://http.cat/";

// Fetch the JSON data containing descriptions for all status codes
let descriptions = {};

fetch("status-codes.json")  // Make sure the path to your JSON file is correct
  .then(response => response.json())
  .then(data => {
    descriptions = data.descriptions; // Store descriptions from the JSON file
    generateCatImage(); // Generate a cat image when the page loads
  })
  .catch(error => console.error("Error loading JSON:", error));

// List of status codes supported by the API (subset of all codes)
const statusCodes = [
  200, 404, 500, 403, 418, 100, 101, 102, 201, 202, 203, 204, 206, 207,
  300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 405, 406, 407,
  408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 420, 421, 422, 423,
  424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499, 501, 502, 503,
  504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599
];

const catImage = document.getElementById("cat-image");
const animatedCat = document.querySelector(".animated-cat");
const catDescription = document.getElementById("cat-description");
const refreshButton = document.getElementById("refresh-button");

// Function to generate a random cat image and description
function generateCatImage() {
  const randomStatus = statusCodes[Math.floor(Math.random() * statusCodes.length)];
  const statusDescription = descriptions[randomStatus] || "No description available."; // Default description if not found

  document.body.style.backgroundColor = randomStatus === 404 ? "#ffcccb" : "#ffe4e1";

  catImage.src = `${apiUrl}${randomStatus}`;  // Set the image source
  catImage.alt = `HTTP Status ${randomStatus}`;  // Set the alt text for accessibility
  catDescription.textContent = statusDescription;  // Display the description

  // Remove any existing animation classes from the animated cat
  animatedCat.classList.remove(
    'bounce-100', 'slide-200', 'shake-300', 'spin-400', 'rotate-500'
  );

  // Add animation based on status code category
  if (randomStatus >= 100 && randomStatus < 200) {
    animatedCat.classList.add('bounce-100'); // Informational: 100s
  } else if (randomStatus >= 200 && randomStatus < 300) {
    animatedCat.classList.add('slide-200'); // Success: 200s
  } else if (randomStatus >= 300 && randomStatus < 400) {
    animatedCat.classList.add('shake-300'); // Redirection: 300s
  } else if (randomStatus >= 400 && randomStatus < 500) {
    animatedCat.classList.add('spin-400'); // Client Error: 400s
  } else if (randomStatus >= 500 && randomStatus < 600) {
    animatedCat.classList.add('rotate-500'); // Server Error: 500s
  }
}

// Refresh button listener
refreshButton.addEventListener("click", generateCatImage);

// Initial load
generateCatImage();

// Set interval to change cat image and description every 3 seconds
setInterval(generateCatImage, 5000);
