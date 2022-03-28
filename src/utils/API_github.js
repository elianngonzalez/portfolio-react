const API = 'https://api.github.com/';
const USER = 'elianngonzalez';

export function GetRepos() {
    return fetch(`${API}users/${USER}/repos`)
        .then(response => response.json())
        .catch(error => console.log(error));
}   // getRepos

export function GetImg(repo, path) {
           // 
    return fetch(`${API}/repos/${USER}/${repo}/contents/${path}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}   // getImg 