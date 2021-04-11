// Models -------------------------------------------------

// Profile Class
class Profile {

    constructor(name, avatar_url, login, public_repos, public_gists, followers, following, company, blog, bio, created_at) {
        this.name = name;
        this.avatar_url = avatar_url;
        this.login = login;
        this.public_repos = public_repos;
        this.public_gists = public_gists;
        this.followers = followers;
        this.following = following;
        this.company = company;
        this.blog = blog;
        this.bio = bio;
        this.created_at = created_at;
    }

    Validate() {
        const newValues = Object.values(this).map((val) => {
            if (val === null || val === '') {
                return val = ' - - - - - - - - - ';
            }
            return val;
        });
        // Validate
        this.name = newValues[0];
        this.avatar_url = newValues[1];
        this.login = newValues[2];
        this.public_repos = newValues[3];
        this.public_gists = newValues[4];
        this.followers = newValues[5];
        this.following = newValues[6];
        this.company = newValues[7];
        this.blog = newValues[8];
        this.bio = newValues[9];
        this.created_at = newValues[10];
    }


}

// Repository Class
class Repository {

    constructor(name, description, forks_count, watchers_count, stargazers_count) {
        this.name = name;
        this.description = description;
        this.forks_count = forks_count;
        this.watchers_count = watchers_count;
        this.stargazers_count = stargazers_count;
    }

    Validate() {
        const newValues = Object.values(this).map((val) => {
            if (val === null || val === '') {
                return val = ' - - - - - - - - - ';
            }
            return val;
        });
        // Validate
        this.name = newValues[0];
        this.description = newValues[1];
        this.forks_count = newValues[2];
        this.watchers_count = newValues[3];
        this.stargazers_count = newValues[4];
    }


}