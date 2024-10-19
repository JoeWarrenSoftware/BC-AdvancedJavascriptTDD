document.getElementById("fetchRepos").addEventListener("click", onfetchRepos);

function onfetchRepos() {
  const username = document.getElementById("username").value;

  if (username) {
    // GitHub API endpoint for fetching user repositories
    const url = `https://api.github.com/users/${username}/repos`;

    // Make a GET request to the GitHub API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub user not found");
        }
        return response.json();
      })
      .then((data) => {
        renderRepos(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  } else {
    console.log("Please enter a GitHub username.");
  }
}

const renderRepos = (repos) => {
  // this loops through the data and logs the name of each repository
  repos.forEach((repo) => {
    // this logs the name of each repository
    console.log(repo.name);
    //TODO: log out the full name of each repository and whether it is a private or public repository
    console.log(`Repo Name is ${repo.full_name} - Repo Access is ${(repo.private == "true" ? "Private" : "Public")}`)
    //TODO: print out Avatar URL and login of the owner
    console.log(`Login Owner is ${repo.owner.login} - Avatar is ${repo.owner.avatar_url}`)
  });
};
