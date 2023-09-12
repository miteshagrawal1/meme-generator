let img = document.getElementById("image");
let credit = document.getElementById("credit");


function fetchimg() {
    
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => {
        return response.json();
    }).then((data) => {
        credit.innerHTML = ` Title:- ${data.title}`;
        // console.log(data)
        getimg(data.url);
    })
}
    
function getimg(link) {
    img.src = link;
}

fetchimg