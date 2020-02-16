let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);

        const users = response.users;

        let output = '';

        for (let i = 0; i < users.length; i++) {
            (output += '<li>' + users[i].name) + '</li>';
        }
        document.getElementById('users').innerHTML = output;
    }
};

xhttp.open('GET', 'users.json', true);
xhttp.send();