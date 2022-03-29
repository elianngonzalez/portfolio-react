import { API, USER } from "./API_github";


export async function GetRepos() {
    try {
        const response = await fetch(`${API}users/${USER}/repos`);
        return await response.json();
    } catch (error) {
        return console.log(error);
    }
} // getRepos

