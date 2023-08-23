const symptomToDiagnosis = {
    "fever": "Common cold",
    "cough": "Bronchitis",
    "diarrhea": "Gastroenteritis",
    "vomiting": "Food poisoning",
    // Add more symptoms and diagnoses here
};

function searchResources() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
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
        resultItem.innerText = "No probable diagnosis found for the entered symptom.";
        resultsContainer.appendChild(resultItem);
    }
}
