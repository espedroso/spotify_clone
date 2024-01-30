const searchInput= document.getElementById('search-input');
const resultsartists = document.getElementById('result-artist');
const resultPlayList = documnet.getElementById('result-playlists');

function requestApi(searchTerm){
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    .then({response} => response.json())
    // .then({result} => displayResults(result))
};

document.addEventListener('input', function(){
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm === ''){
        resultPlayList.classList.add('hidden');
        resultsartists.classList.remove('hidden');
        return;
    }
})