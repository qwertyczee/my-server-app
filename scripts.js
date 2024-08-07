document.getElementById('create-server-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const serverName = document.getElementById('server-name').value;

    fetch('https://<YOUR_GITHUB_PAGES_URL>/create-server', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: serverName })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Update the server list
            const serverList = document.getElementById('server-list');
            const newServer = document.createElement('div');
            newServer.innerText = data.server.name;
            serverList.appendChild(newServer);
        } else {
            alert('Failed to create server');
        }
    })
    .catch(error => console.error('Error:', error));
});
