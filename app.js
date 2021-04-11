// Main --------------------------------------------------------
// GITHUB and UI Init
const github = new Github();
const ui = new UI();

// serachInputs Event Listeners
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', getDataFromGithubApi)

// GET DATA FROM GITHUB function
function getDataFromGithubApi(e) {

    // Validating Input
    const userName = searchInput.value;
    if (userName !== '') {
        // Get Data
        github.get(`https://api.github.com/users/${userName}`)
            // Promise Resolved
            .then((data) => {
                // Show Profile Data
                ui.ShowProfile(data.profile);
                // Show Repositories Data
                ui.ShowRepos(data.repositories);
            })
            // Promise Rejected
            .catch(err => {
                console.log(err);
                // Show Alert
                ui.ShowAlert('GitHub Username not Found', 'danger', 3);
                ui.ClearOutput();
            });
    } else {
        // ALERT THAT FIELD IS EMPTY
        ui.ShowAlert('Field is Empty. Enter a Username', 'warning', 3);
        ui.ClearOutput();
    }

}