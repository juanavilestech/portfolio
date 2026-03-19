const axios = require("axios");

async function getRepositories(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error.message);
    throw error;
  }
}

module.exports = { getRepositories };
