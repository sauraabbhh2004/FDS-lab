const apiKey = '45794375-e1f408e3c7d5a12e82621e793';
let images = []; // Array to store fetched images
let currentIndex = 0; // To track the current image index

function fetchImages(query) {
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=10`)
        .then(response => response.json())
        .then(data => {
            if (data.hits.length > 0) {
                images = data.hits; // Store the fetched images
                currentIndex = 0; // Reset the index
                displayImage(); // Display the first image
            } else {
                document.getElementById('title').innerText = "No images found.";
                document.getElementById('image').src = ''; // Clear image if no results
            }
        })
        .catch(error => console.error('Error fetching images:', error));
}

function displayImage() {
    const image = images[currentIndex];
    document.getElementById('image').src = image.webformatURL;
    document.getElementById('title').innerText = image.tags;
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('name').value.trim(); // Read the input value
    if (query !== '') {
        fetchImages(query);
    } else {
        document.getElementById('title').innerText = "Please enter a search term.";
        document.getElementById('image').src = ''; // Clear image if no input
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    const query = document.getElementById('name').value.trim();
    if (query !== '') {
        if (images.length === 0 || currentIndex >= images.length - 1) {
            fetchImages(query); // Fetch new images if current images are exhausted or on first fetch
        } else {
            currentIndex++; // Move to the next image
            displayImage(); // Display the new image
        }
    }
    else {
        document.getElementById('title').innerText = "Please enter a search term.";
        document.getElementById('image').src = ''; // Clear image if no input
    }
})