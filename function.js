const API_KEY = "apiKey=AQcHL3ZPkDYpRHSRoeemBhjgor06QW6b" 
const URL = "https://api.giphy.com/v1"
const RANDOM_END_POINT = "/gifs/random?"
const imgWrapper = document.getElementById('imgWrapper');
const gifBtn = document.querySelector('.btn');
const searchInput  = document.getElementById('input-box');

const getGif = () => {
  for (let i=0; i < 5; i++){
    // we create a new instance of an HTTP request
    var request = new XMLHttpRequest();
    gifSettings(request);
    destoryhtml(imgWrapper);
    gifsImgOutput(request);
  }
}

const gifSettings = request => {
  //we get the text that the user has typed in
  searchTerm = searchInput.value;
  // we set up the url endpoint we want to reach
  const searchQuery = "&tag=" + searchTerm;
  const requestUrl = URL + RANDOM_END_POINT + API_KEY + searchQuery;

  getGifUrl(request, requestUrl);
}

const getGifUrl = (request, requestUrl) =>{
  // we make the request
  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.send();
}

const gifsImgOutput = request => {
  //we do something with the successful response
    request.onload = function() {
      let response = request.response;
      let imageUrl  = response.data.image_url;
     
      const gifsItem = document.createElement('img');
      gifsItem.src = imageUrl;
      imgWrapper.appendChild(gifsItem); 
    }
  
}
const destoryhtml = (parent) =>{
  let destoryPoint = parent;
  while (destoryPoint.firstChild) {
      destoryPoint.removeChild(destoryPoint.firstChild);
  }
}
gifBtn.addEventListener('click', getGif);


searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    gifBtn.click();
  }
});