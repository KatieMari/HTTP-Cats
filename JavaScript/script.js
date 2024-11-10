// Defines the Base URL for Fetching HTTP Cat Images
const apiUrl = "https://http.cat/";

// Object to Hold Descriptions Fetched from the JSON File
let descriptions = {};


// Fetch the Descriptions from the Status-codes.json File
fetch("status-codes.json")
  .then(response => response.json())
  .then(data => {
    // Stores the Description in the 'descriptions' Object
    descriptions = data.descriptions;
    // Generates a Random Cat Image when the Page loads
    generateCatImage();
  })
  .catch(error => console.error("Error loading JSON:", error));

// List of Supported HTTP Status Codes for Random Selection
const statusCodes = [
  200, 404, 500, 403, 418, 100, 101, 102, 201, 202, 203, 204, 206, 207,
  300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 405, 406, 407,
  408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 420, 421, 422, 423,
  424, 425, 426, 429, 431, 444, 450, 451, 497, 498, 499, 501, 502, 503,
  504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 599
];

// Elements for Cat Image, Description, and Refresh Button
const catImage = document.getElementById("cat-image");
const animatedCat = document.querySelector(".animated-cat");
const catDescription = document.getElementById("cat-description");
const refreshButton = document.getElementById("refresh-button");

// Function to Generate a Random Cat Image and Description
function generateCatImage() {
  // Select a Random Status Code from the statusCodes Array
  const randomStatus = statusCodes[Math.floor(Math.random() * statusCodes.length)];
  // Get the Description for the Status Code or Default Message if not Found
  const statusDescription = descriptions[randomStatus] || "No description available.";

  // Set Background Color Based on Status Code Category
  let backgroundColor;
  if (randomStatus >= 100 && randomStatus < 200) {
    // Light Blue for Informational: 100s
    backgroundColor = "#D6EAF8";
  } else if (randomStatus >= 200 && randomStatus < 300) {
    // Light Green for Success: 200s
    backgroundColor = "#D4EFDF";
  } else if (randomStatus >= 300 && randomStatus < 400) {
    // Light Yellow for Redirection: 300s
    backgroundColor = "#FCF3CF";
  } else if (randomStatus >= 400 && randomStatus < 500) {
    // Light Red for Client Error: 400s
    backgroundColor = "#F5B7B1";
  } else if (randomStatus >= 500 && randomStatus < 600) {
    // Light purple for Server Error: 500s
    backgroundColor = "#D2B4DE";
  } else {
    // Default Light Pink for Unexpected Cases
    backgroundColor = "#FFE4E1";
  }

  // Change the Background Colour of the Page Based on the Status Code Category
  document.body.style.backgroundColor = backgroundColor;

  // Set the Source URL for the Cat Image using the Status Code
  catImage.src = `${apiUrl}${randomStatus}`;
  // Set the Alt Text fpr Accessibility Purposes
  catImage.alt = `HTTP Status ${randomStatus}`;
  // Display the Status Description in the Paragraph Element
  catDescription.textContent = statusDescription;

  // Removes Any Existing Animation Classes from the Animated Cat
  animatedCat.classList.remove(
    'bounce-100', 'slide-200', 'shake-300', 'spin-400', 'rotate-500'
  );

  // Add Animation Based on Status Code Category
  if (randomStatus >= 100 && randomStatus < 200) {
    // Informational: 100s
    animatedCat.classList.add('bounce-100');
  } else if (randomStatus >= 200 && randomStatus < 300) {
    // Success: 200s
    animatedCat.classList.add('slide-200');
  } else if (randomStatus >= 300 && randomStatus < 400) {
    // Redirection: 300s
    animatedCat.classList.add('shake-300');
  } else if (randomStatus >= 400 && randomStatus < 500) {
    // Client Error: 400s
    animatedCat.classList.add('spin-400');
  } else if (randomStatus >= 500 && randomStatus < 600) {
    // Server Error: 500s
    animatedCat.classList.add('rotate-500');
  }
}

// Refresh button listener
refreshButton.addEventListener("click", generateCatImage);

// Initial load
generateCatImage();

// Set interval to change cat image and description every 5 seconds
setInterval(generateCatImage, 5000);
