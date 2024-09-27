const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruitImage = document.getElementById('fruit-image');

const fruitData = {
    'Apple': 'images/apple.jpg',
    'Apricot': 'images/apricot.jpg',
    'Avocado 🥑': 'images/avocado.jpg',
    'Banana': 'images/banana.jpg',
    'Bilberry': 'images/bilberry.jpg',
    'Blackberry': 'images/blackberry.jpg',
    'Blackcurrant': 'images/blackcurrant.jpg',
    'Blueberry': 'images/blueberry.jpg',
    'Boysenberry': 'images/boysenberry.jpg',
    'Cherry': 'images/cherry.jpg',
    'Coconut': 'images/coconut.jpg',
    'Cranberry': 'images/cranberry.jpg',
    'Cucumber': 'images/cucumber.jpg',
    'Custard apple': 'images/custard-apple.jpg',
    'Date': 'images/date.jpg',
    'Dragonfruit': 'images/dragonfruit.jpg',
    'Elderberry': 'images/elderberry.jpg',
    'Fig': 'images/fig.jpg',
    'Grape': 'images/grape.jpg',
    'Mango': 'images/mango.jpg',
    'Orange': 'images/orange.jpg',
    'Peach': 'images/peach.jpg',
    'Pineapple': 'images/pineapple.jpg',
    'Strawberry': 'images/strawberry.jpg',
    // Add more fruits and their image paths here...
};

function search(str) {
    let results = [];
    if (str.length > 0) {
        results = Object.keys(fruitData).filter(f => f.toLowerCase().includes(str.toLowerCase()));
    }
    return results;
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = '';

    if (results.length > 0) {
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            suggestions.appendChild(li);
        });
    } else if (inputVal.length > 0) {
        const li = document.createElement('li');
        li.textContent = 'No results found';
        suggestions.appendChild(li);
    }
}

function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
        input.value = e.target.textContent;
        suggestions.innerHTML = '';

        // Display the corresponding fruit image
        const selectedFruit = e.target.textContent;
        fruitImage.src = fruitData[selectedFruit]; // Set image source
        fruitImage.style.display = 'block'; // Show the image
    }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
