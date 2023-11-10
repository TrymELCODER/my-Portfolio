// Function to fetch data from the API
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display the data on the web page
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error('Error:', error);
            // Display an error message on the web page
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

// Call the fetchData function when the page loads
fetchData();
