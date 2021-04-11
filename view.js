//  UI functionalities -----------------------------------------
class UI {

    constructor() {
        this.profileOutput = document.querySelector('#profileOutput');
        this.reposOutput = document.querySelector('#reposOutput');
        this.alertParent = document.querySelector('#searchContainer');
        this.searchCard = document.querySelector('#searchCard');
        this.searchInput = document.querySelector('#searchInput');
    }

    ShowProfile(profileData) {
        // Check Valid Data
        const profile = new Profile(profileData.name, profileData.avatar_url, profileData.login, profileData.public_repos, profileData.public_gists, profileData.followers, profileData.following, profileData.company, profileData.blog, profileData.bio, profileData.created_at);
        profile.Validate();
        // Create UI Element for Profile
        const output = `
        <h3 class="mt-4">Profile</h3>
        <hr class="my-0">
        <div class="card card-body">
            <div class="row">
                <div class="col-sm-12 col-md-3 my-2">
                    <h4 class="card-title text-center mt-0 pt-0">${profile.name}</h4>
                    <img src="${profile.avatar_url}" alt="Profile Photo" class="img-thumbnail d-block m-auto w-100">
                    <a target="_blank" href="https://github.com/${profile.login}" class="btn btn-dark btn-block">View Profile</a>
                </div>
                <div class="col-sm-12 col-md-9 my-3">
                    <span class="badge  badge-dark">Public Repos: ${profile.public_repos}</span>
                    <span class="badge  badge-success">Public Gits: ${profile.public_gists}</span>
                    <span class="badge  badge-danger">Followers: ${profile.followers}</span>
                    <span class="badge  badge-info">Following: ${profile.following}</span>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Bio :</strong> <br>${profile.bio}</li>
                        <li class="list-group-item"><strong>Company :</strong> ${profile.company}</li>
                        <li class="list-group-item"><strong>Website/Blog: </strong> ${profile.blog}</li>
                        <li class="list-group-item"><strong>Member since: </strong> ${profile.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
        // OUTPUT
        this.profileOutput.innerHTML = output;
    }

    ShowRepos(repositories) {

        this.reposOutput.innerHTML = `
        <h3 class="mt-4">Last Repositories</h3>
        <hr class="my-0">
        `;
        // Loop all Repositories
        repositories.forEach(reposData => {
            // Check Valid Data
            const repos = new Repository(reposData.name, reposData.description, reposData.forks_count, reposData.watchers_count, reposData.stargazers_count);
            repos.Validate();
            // Create UI element for Repos
            let reposDiv = document.createElement('div');
            reposDiv.className = 'card card-body';
            const output = `
            <div class="row">
                <div class="col-sm-12 col-md-5 my-2">
                    <p class="card-text"><strong>${repos.name}</strong> ${repos.description}</p>
                </div>
                <div class="col-sm-12 col-md-4 my-2">
                    <span class="badge  badge-dark">Forks: ${repos.forks_count}</span>
                    <span class="badge  badge-danger">Watchers: ${repos.watchers_count}</span>
                    <span class="badge  badge-warning">Stars: ${repos.stargazers_count}</span>
                </div>
                <div class="col-sm-12 col-md-3 my-2">
                    <a target="_blank" href="https://github.com/${repos.name}" class="btn btn-outline-dark d-block mx-auto text-nowrap">View Repos</a>
                </div>
            </div>
            `;
            // OUTPUT
            reposDiv.innerHTML = output;
            // Append OUTPUT Element
            this.reposOutput.appendChild(reposDiv);
        })
    }

    ClearProfile() {
        // Clear output
        this.profileOutput.innerHTML = '';
    }

    ClearRepos() {
        // Clear output
        this.reposOutput.innerHTML = '';
    }

    ClearOutput() {
        this.ClearRepos();
        this.ClearProfile();
    }

    ShowAlert(msg, style, sec) {
        // Clear ...
        this.ClearAlert();

        // Add Style to the Search Card
        this.searchCard.classList.add(`${style}-state`);

        // Create UI Element for Alert
        let alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${style} mt-3 mb-2`;
        alertDiv.id = 'alert';
        alertDiv.innerHTML = `
            <p class="d-block m-auto text-center">${msg}</p>
        `;
        // Append Alert
        this.alertParent.insertBefore(alertDiv, this.searchCard);
        // Clear it After  ...secondes
        setTimeout(this.ClearAlert, sec * 1000);
        setTimeout(() => {
            this.searchCard.classList.remove(`${style}-state`);
        }, sec * 1000);
    }

    ClearAlert() {
        const alertDiv = document.querySelector('#alert');
        if (alertDiv) {
            alertDiv.remove();
        }
    }

}