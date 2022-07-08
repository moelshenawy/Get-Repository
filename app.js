// Main Variables

let thInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.addEventListener("click", () => {
  getRepos();
});



// Get Repos Function
function getRepos() {
  if (thInput.value === "") {
    // If Value Is Empty

    reposData.innerHTML = "<span>Please Write Github Username</span>";
  } else {
    fetch(`https://api.github.com/users/${thInput.value}/repos`)
      .then((response) => response.json())

      .then((repositories) => {
        // Empty The Container
        reposData.innerHTML = "";

        // Loop on repositories
        repositories.forEach((repo) => {
          // Create The Main Div Element
          let mainDiv = document.createElement("div");

          // Create repo name Text
          let repoName = document.createTextNode(repo.name);

          // Append The Text To The Main Div
          mainDiv.appendChild(repoName);

          // Create Repo URL ANCOUR
          let theUrl = document.createElement("a");

          // Create Repo URl Text
          let theUrlText = document.createTextNode("Visit");

          // Append The Repo  Url Text To ancour Tag
          theUrl.appendChild(theUrlText);

          // Add The HyperText Referens "href"
          theUrl.href = `https://github.com/${thInput.value}/${repo.name}`;

          // Set Attribute Blank
          theUrl.setAttribute("target", "_blank");

          // Append Url Anchor To Main div
          mainDiv.appendChild(theUrl);

          // Create Starts Count Span
          let starsSpan = document.createElement("span");

          // Create The Starts Count Text
          let starsText = document.createTextNode(
            `Stars ${repo.stargazers_count}`
          );

          // Add Stars Count Text To Stars Span
          starsSpan.appendChild(starsText);

          // append stars count span to main Div
          mainDiv.appendChild(starsSpan);

          // Add Class To MainDiv
          mainDiv.className = "repo-box";

          // Append The Main Div To Container
          reposData.appendChild(mainDiv);
        });
      });
  }
}
