const API = 'https://api.github.com/';
const USER = 'elianngonzalez';

export function GetRepos() {
    return fetch(`${API}users/${USER}/repos`)
        .then(response => response.json())
        .catch(error => console.log(error));
}   // getRepos

export function GetImg(reponame) {
    //no funciona todavia
           // /repos/{owner}/{repo}/contents/{path}
    return fetch(`${API}/repos/${USER}/${reponame}/contents/img/`)
        .then(response => response.json())
        .catch(error => console.log(error));
}   // getImg 