const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const objectJoke ={
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    }
    fetch(API_URL, objectJoke)
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerText = data.joke);
};



window.onload = () => fetchJoke();