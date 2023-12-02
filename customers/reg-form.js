document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const userInfoContainer = document.getElementById("userInfo");

    loadUserData();

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        saveUserData(username, email, password);

        displayUserInfo(username, email, password);
    });

    function saveUserData(username, email, password) {
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
    }

    function loadUserData() {
        const userDataString = localStorage.getItem("userData");

        const userData = JSON.parse(userDataString);

        if (userData) {
            displayUserInfo(userData.username, userData.email, userData.password);
        }
    }

    function displayUserInfo(username, email, password) {
        const maskedPassword = '*'.repeat(password.length);
        const userInfoHTML = `
            <h3>User Information:</h3>
            <p><strong>Username:</strong> ${username}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${maskedPassword}</p>
        `;

        userInfoContainer.innerHTML = userInfoHTML;
    }
});
