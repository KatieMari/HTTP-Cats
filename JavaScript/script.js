// For the Codes and Descriptions
const descriptions = codesAndDescriptions.descriptions;
const statusCodes = codesAndDescriptions.codes;

// Defines the Base URL for Fetching HTTP Cat Images
const apiUrl = "https://http.cat/";
const meowFactsApi = "https://meowfacts.herokuapp.com/";

// Elements for Cat Image, Description, and Refresh Button
const catImage = document.getElementById("cat-image");
const animatedCat = document.querySelector(".animated-cat");
const catDescription = document.getElementById("cat-description");
const refreshButton = document.getElementById("refresh-button");
const catFact = document.getElementById("cat-fact");

/**
 * Function to Generate a Random Cat Image, Description, and Cat Fact
 */
function generateCatImage() {

  // Select a Random Status Code from the statusCodes Array
  const randomStatus = statusCodes[Math.floor(Math.random() * statusCodes.length)];

  // Get the Description for the Status Code or Default Message if not Found
  const statusDescription = descriptions[randomStatus] || "No description available.";

  // Fetch and Display Cat Fact
  // Sends a Request to the Meow Facts API
  fetch(meowFactsApi)
    // Converts the Response into JSON Format
    .then(res => res.json())
    .then(data => {

      // Display the First Fact from the 'data' Array in the HTML Element with ID 'cat-fact'
      const catFactText = data.data[0];
      // Used so I can See Common Words coming up in the Facts to add to the 'else if'
      console.log(catFactText);
      catFact.innerHTML = catFactText;

      // Decide the background color and animation based on the cat fact
      let backgroundColor;
      let animationClass;

      if (catFactText.includes("clowder") || catFactText.includes("kitten")) {
        backgroundColor = "#ffffba"; // Pastel Background for "clowder"
        animationClass = 'shake';
      } else if (catFactText.includes("toes") || catFactText.includes("paws")) {
        backgroundColor = "#baffc9"; // Pastel Green Background for "toes"
        animationClass = 'bounce';
      } else if (catFactText.includes("purring")|| catFactText.includes("pet")) {
        backgroundColor = "#bae1ff"; // Pastel Blue Background for "purring"
        animationClass = 'spin';
      } else if (catFactText.includes("nap") || catFactText.includes("human")) {
        backgroundColor = "#F5F5DC"; // Beige Background for "nap"
        animationClass = 'rotate';
      } else if (catFactText.includes("tail")|| catFactText.includes("dog")) {
        backgroundColor = "#ffdfba"; // Pastel Orange Background for "tail"
        animationClass = 'slide';
      } else if (catFactText.includes("whiskers")|| catFactText.includes("heat")) {
        backgroundColor = "#FFB6C1"; // Light Pink Background for "whiskers"
        animationClass = 'bounce';
      } else if (catFactText.includes("meow")|| catFactText.includes("claws")) {
        backgroundColor = "#FAA0A0"; // Pastel Red Background for "meow"
        animationClass = 'shake';
      } else if (catFactText.includes("sleep")|| catFactText.includes("domesticated")) {
        backgroundColor = "#C0C0C0"; // Silver background for "sleep"
        animationClass = 'spin';
      } else if (catFactText.includes("hunt")|| catFactText.includes("sleep")) {
        backgroundColor = "#9c8470"; // Light Brown Background for "hunt"
        animationClass = 'rotate';
      } else if (catFactText.includes("cute")|| catFactText.includes("animal")) {
        backgroundColor = "#C3B1E1"; // Pastel Purple background for "cute"
        animationClass = 'bounce';
      } else {
        backgroundColor = "#FFE4E1"; // Default pink background
        animationClass = 'spin';
      }


      // Change the Background Colour of the Page Based on the Fact
      document.body.style.backgroundColor = backgroundColor;

      // Removes Any Existing Animation Classes from the Animated Cat
      animatedCat.classList.remove('bounce', 'slide', 'shake', 'spin', 'rotate');

      // Add the Selected Animation Based on the Facts Content
      animatedCat.classList.add(animationClass);

      // Set the Source URL for the Cat Image using the Status Code and Set an Alt Text
      catImage.src = `${apiUrl}${randomStatus}`;
      catImage.alt = `HTTP Status ${randomStatus} Cat`;

      // Display the Status Description in the Paragraph Element
      catDescription.innerHTML = `${randomStatus}: ${statusDescription}`;
    })
    .catch(error => console.error('Error fetching cat fact:', error)); // Added error handling for fetch
}

// Refresh button listener
refreshButton.addEventListener("click", generateCatImage);

// Initial load
generateCatImage();

// Set interval to change cat image and description every 5 seconds
let catInterval = setInterval(generateCatImage, 5000);

// Clears the Interval on User Interaction
refreshButton.addEventListener("click", () => {
  clearInterval(catInterval);
  catInterval = setInterval(generateCatImage, 5000);
});
