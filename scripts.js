document.getElementById('create-server-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const serverName = document.getElementById('server-name').value;

    fetch('https://my-server-backend.vercel.app/api/create_server', { // Correct endpoint URL
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
            newServer.innerText = data.message;
            serverList.appendChild(newServer);
        } else {
            alert('Failed to create server');
        }
    })
    .catch(error => console.error('Error:', error));
});
