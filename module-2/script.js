const usernameInput = document.getElementById('searchInput');
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const bio = document.getElementById('bio');
const nameofuser = document.getElementById('name');
const usernameDisplay = document.getElementById('username');
const avatar = document.getElementById('profileImg');
const profilediv = document.getElementById('profilediv');
const userNotFound = document.getElementById('userNotFound');

async function checkGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(url);    

        if (response.status === 200) {
            const data = await response.json();
            bio.textContent = data.bio || 'No Data Available';
            repos.textContent = data.public_repos;
            following.textContent = data.following;
            followers.textContent = data.followers;
            nameofuser.textContent = data.name || data.login;
            usernameDisplay.textContent = `@${data.login}`;
            avatar.src = data.avatar_url;
            profilediv.classList.remove('hidden');
            userNotFound.classList.add('hidden');
        } else if (response.status === 404) {
            profilediv.classList.add('hidden');
            userNotFound.classList.remove('hidden');
        } else {
            profilediv.classList.add('hidden');
            userNotFound.classList.remove('hidden');
            userNotFound.querySelector('p').textContent = 'An error occurred. Please try again later.';
        }
    } catch (error) {
        profilediv.classList.add('hidden');
        userNotFound.classList.remove('hidden');
        userNotFound.querySelector('p').textContent = 'Network error. Please check your connection.';
    }
}

// Handle button click
document.getElementById('searchBtn').addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        checkGitHubUser(username);
    } else {
        userNotFound.classList.remove('hidden');
        userNotFound.querySelector('p').textContent = 'Please enter a GitHub username.';
        profilediv.classList.add('hidden');
    }
});