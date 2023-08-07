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
        artImage.className = "artPaint"
        const artName = document.createElement('h1')
        artName.className = "paintName"
        artImage.src = art.image
        artName.h1 = art.name
        artCard.addEventListener("mouseover", e => {
            renderArtCard
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
        artInfo.className = "paintInfo"
        const artYear = document.createElement('h2')
        artYear.className = "paintYear"
        const artMaker = document.createElement('h3')
        artMaker.className = "paintMaker"
        artInfo.p = art.description
        artYear.h2 = art.year
        artMaker.h3 = art.artist
        artBack.addEventListener("click", e => {
            console.log('click!')
            artBack
        })
        artBack.append(artFlip, artInfo, artYear, artMaker)
        artContainer.append(artBack)
    })
}

