const symptomToDiagnosis = {
  fever: "Common cold",
  cough: "Bronchitis",
  diarrhea: "Gastroenteritis",
  vomiting: "Food poisoning",
  // Add more symptoms and diagnoses here
};

function searchResources() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const resultsContainer = document.getElementById("resultsContainer");

  resultsContainer.innerHTML = "";

  if (symptomToDiagnosis[searchInput]) {
    const resultItem = document.createElement("div");
    resultItem.className = "result-item";
    resultItem.innerText = `Probable diagnosis for "${searchInput}": ${symptomToDiagnosis[searchInput]}`;
    resultsContainer.appendChild(resultItem);
  } else {
    const resultItem = document.createElement("div");
    resultItem.className = "result-item";
    resultItem.innerText =
      "No probable diagnosis found for the entered symptom.";
    resultsContainer.appendChild(resultItem);
  }
}

function sendSearchQueryToServer(query) {
  fetch("http://INSERTYOURIP:5000/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error sending search query:", error);
    });
}

function searchResources() {
  const searchInput = document.getElementById("searchInput").value;

  // Send the search query to the backend
  sendSearchQueryToServer(searchInput);

  // Display search results in the frontend (you can modify this part)
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = `<p>Searching resources for: ${searchInput}</p>`;
}
