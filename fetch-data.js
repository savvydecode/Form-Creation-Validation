async function fetchUserData() {
    //Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'

    //select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        //Fetch data from api
        const response = await fetch(apiUrl);
        const users = await response.json();

        //clear the loading message after data fetched
        dataContainer.innerHTML = "";

        //create and append userlist
        const userList = document.createElement("ul");
        users.forEach(user => {
            const userItem = document.createElement('li');
            userItem.innerText = user.name;
            userList.appendChild(userItem);
            dataContainer.appendChild(userList);
            console.log(dataContainer)
        });
    } catch (error) {
        //Handle errors by dislaying an error message
        dataContainer.innerHTML = "";
        dataContainer.innerHTML = "Failed to load user data.";
    }

}

document.addEventListener('DOMContentLoaded', fetchUserData);