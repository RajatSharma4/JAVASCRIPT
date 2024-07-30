// Initialize the dictionary object
const dictionary = {};

// Function to add a word and its meaning
function addWord(word, meaning) {
    if (word && meaning) {
        dictionary[word.toLowerCase()] = meaning;
        alert(`"${word}" added to the dictionary.`);
    } else {
        alert('Please enter both a word and its meaning.');
    }
}

// Function to search for a word's meaning
function searchMeaning(word) {
    const meaning = dictionary[word.toLowerCase()];
    if (meaning) {
        document.getElementById('result').innerText = `Meaning of "${word}": ${meaning}`;
    } else {
        document.getElementById('result').innerText = `Sorry, "${word}" not found in the dictionary.`;
    }
}

// Event listeners for buttons
document.getElementById('addButton').addEventListener('click', () => {
    const word = document.getElementById('wordInput').value;
    const meaning = document.getElementById('meaningInput').value;
    addWord(word, meaning);
    document.getElementById('wordInput').value = '';
    document.getElementById('meaningInput').value = '';
});

document.getElementById('searchButton').addEventListener('click', () => {
    const word = document.getElementById('wordInput').value;
    searchMeaning(word);
    document.getElementById('wordInput').value = '';
});
