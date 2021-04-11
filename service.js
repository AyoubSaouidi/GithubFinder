// Github Data Retreiving ---------------------------------------
class Github {

    constructor() {
        this.client_id = '5d85bb7c816fcab017fa';
        this.client_secrets = '5ddae7cd64a6d36c2a7b08a710e7b0798c1056c4';
        this.per_page = 5;
        this.sort = 'created';
        this.direction = 'asc';
    }

    async get(url) {
        // Wait for fetching and getting a response the storing it in a variable
        const profileResponse = await fetch(url);
        // Wait until the response is resolved then extract data from it in format JSON
        const profileData = await profileResponse.json();
        // Fetch Repositories after having the repos_Url from profileData
        const repositoriesResponse = await fetch(profileData.repos_url + `?client_id=${this.client_id}&client_secrets=${this.client_secrets}&per_page=${this.per_page}&sort=${this.sort}&direction=${this.direction}`);
        // Wait until the response is resolved then extract data from it in format JSON
        const repositoriesData = await repositoriesResponse.json();
        // returning data
        return {
            profile: profileData,
            repositories: repositoriesData
        };
    }

}