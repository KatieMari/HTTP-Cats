const apiUrl = "https://http.cat/";
const statusCodes = [
  100, 101, 102, 200, 201, 202, 203, 204, 206, 207, 300, 301, 302, 303, 304, 305,
  307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413,
  414, 415, 416, 417, 418, 420, 421, 422, 423, 424, 425, 426, 429, 431, 444, 450,
  451, 497, 498, 499, 500, 501, 502, 503, 504, 506, 507, 508, 509, 510, 511, 521,
  522, 523, 525, 599
]; // All status codes supported by the API

const catImage = document.getElementById("cat-image");
const catDescription = document.getElementById("cat-description");
const refreshButton = document.getElementById("refresh-btn");

// Function to show a random cat
function showRandomCat() {
  const randomCode = statusCodes[Math.floor(Math.random() * statusCodes.length)];
  catImage.src = `${apiUrl}${randomCode}`;
  catImage.alt = `HTTP Status ${randomCode}`;
  catDescription.textContent = `Status ${randomCode}`;
}

// Refresh button listener
refreshButton.addEventListener("click", showRandomCat);

// Initial load
showRandomCat();
