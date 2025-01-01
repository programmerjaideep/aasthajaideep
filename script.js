// script.js

document.addEventListener("DOMContentLoaded", () => {
    const resourceLinks = document.querySelectorAll("#resources ul li a");

    resourceLinks.forEach(link => {
        link.addEventListener("click", event => {
            const fileName = link.getAttribute("href");
            console.log(`Downloading resource: ${fileName}`);
            // Additional logic for tracking downloads or handling custom behavior can be added here.
        });
    });

    // Add GeeksforGeeks option
    const resourcesSection = document.querySelector("#resources ul");
    const geeksLink = document.createElement("li");
    geeksLink.innerHTML = '<a href="https://www.geeksforgeeks.org/" target="_blank">GeeksforGeeks</a>';
    resourcesSection.appendChild(geeksLink);
});
