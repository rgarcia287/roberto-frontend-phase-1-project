//Calling the json
console.log('main.js is connected')
fetch('http://localhost:3000/art')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    renderArtCard(data)
    renderBackCard(data)
  });


//Elements
  const artContainer = document.querySelector(".art-container")

//Front of Card
function renderArtCard (data) {
    data.forEach(art => {
        const artCard = document.createElement('div')
        artCard.classList.add("card")
        const artImage = document.createElement('img')
        artImage.src = art.image
        let cardState = art.image
        artCard.addEventListener("mouseover", e => {
            art.name
            console.log(art.name)
    })
    artCard.append(artImage)
    artContainer.append(artCard)
    })}

//Back of Card
function renderBackCard (data) {
    data.forEach(art => {
        const artBack = document.createElement('div')
        artBack.classList.add("backCard")
        const artFlip = document.createElement('div')
        const artInfo = document.createElement('p')
        const artYear = document.createElement('h2')
        const artMaker = document.createElement('h3')
        artInfo.p = art.description
        artYear.h2 = art.year
        artMaker.h3 = art.artist
        let cardState = art.image
        artBack.addEventListener("click", e => {
            console.log('Click Me!')
            if (cardState = false) {
                return renderBackCard(data);
            } else {
                renderArtCard(data);
            }
        })
    })
}

