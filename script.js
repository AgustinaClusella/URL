const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl(){
    let originalURL = document.getElementById("originalURL").value;
    let apiURL = "https://tinyurl.com/api-create.php? url=" + encodeURIComponent(originalURL);
   
    {shortenedURLTextarea = document.getElementById("shortenedURL");}
 
    fetch(apiURL).then(response => response.text()).then(data => 
        { shortenedURLTextarea.value = data;}).catch(error =>{shortenedURLTextarea.value = "Error : unable to shorten URL";
    });
}

reloadBtn.addEventListener('click', ()=>{
    location.reload();
});
