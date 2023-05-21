const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const reposList = document.getElementById("repos-list");

searchButton.addEventListener("click", () => {
  const username = searchInput.value;
  if (username) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        reposList.innerHTML = "";
        data.forEach((repo) => {
          const listItem = document.createElement("li");
          listItem.classList.add("repo-item");
          listItem.innerHTML = `
                <div class="repo-name"><a href="${
                  repo.html_url
                }" target="_blank">${repo.name}</a></div>
                <div class="repo-description">${
                  repo.description || "No description available"
                }</div>
              `;
          reposList.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
