//calling the json
console.log('main.js is connected')
fetch('http://localhost:3000/art')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    renderArtCard(data)
  });

  //Calling Functions
  renderArtCard()

  //Elements
  const artContainer = document.querySelector(".art-container")

  //Card
  function renderArtCard (data) {
    const artCard = document.createElement('div')
    artCard.classList.add("card")
    artCard.addEventListener("click", e => infoClick())
    artCard.addEventListener ("mouseenter", (event) => {
        data.forEach(data => {
            data.name
        });
        setTimeout(() => {
            event.target.e = "";
        }, 1000);
    },
  )

    const image = document.createElement("img")
    image.src = data.forEach(data => {
        data.image}) 
}
