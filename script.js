function searchResources() {
    const searchInput = document.getElementById("searchInput").value;
    const resultsContainer = document.getElementById("resultsContainer");

    // Simulating an API call with mock data
    const mockApiResponse = [
        "Resource 1",
        "Resource 2",
        "Resource 3"
    ];

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Display results
    mockApiResponse.forEach(resource => {
        const resultItem = document.createElement("div");
        resultItem.className = "result-item";
        resultItem.innerText = resource;
        resultsContainer.appendChild(resultItem);
    });
}
