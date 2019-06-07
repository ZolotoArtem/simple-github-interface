const BASE_URL = 'https://api.github.com';

const API = {
    fetchProfile(username) {
      const url = `${BASE_URL}/users/${username}`;
      return fetch(url).then((res) => res.json())
    },
    fetchRepos(username) {
      const url = `${BASE_URL}/users/${username}/repos`;
      return fetch(url).then((res) => res.json())
    },
    fetchCommits(username, rep) {
      const url = `${BASE_URL}/repos/${username}/${rep}/commits`;
      return fetch(url).then((res) => res.json())
    },
}

export default API;