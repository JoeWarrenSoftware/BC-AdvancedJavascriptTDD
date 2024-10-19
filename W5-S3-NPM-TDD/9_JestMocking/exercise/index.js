const { getUserRepos } = require("./github");

// TODO: Enter your GitHub username
const gitHubUser = "matthewwolak";

getUserRepos(gitHubUser).then((repos) => {
  console.log(repos);
});
