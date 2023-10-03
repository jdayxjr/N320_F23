const apiUrl = 'https://dog.ceo/api/breeds/image/random/20';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch data');
    }
}

async function displayDataInHTML() {
    const container = document.getElementById('data-container');
    try {
        const data = await fetchData();
        const images = data.message;

        // Clear previous content
        container.innerHTML = '';

        // Display images in the container
        images.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = `Dog Image ${index + 1}`;
            container.appendChild(imgElement);
        });
    } catch (error) {
        console.error(error);
        container.innerHTML = `<p>${error.message}</p>`;
    }
}

// Call the function to display data in the HTML container
displayDataInHTML();