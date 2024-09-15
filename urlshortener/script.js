const shortBtn = document.getElementById('short-btn');
const refreshBtn = document.getElementById('refresh-btn');

shortBtn.addEventListener('click', () => {
    const longURL = document.getElementById("longURL").value;
    const apiUrl= `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`;
    const ShortURLTextarea = document.getElementById("ShortURL");

    fetch(apiUrl)
    .then(response => response.text())
    .then(data => ShortURLTextarea.value = data)
    .catch(error => ShortURLTextarea.value="Error:Unable to Shorten URL");

    

});
refreshBtn.addEventListener('click',() => location.reload());

