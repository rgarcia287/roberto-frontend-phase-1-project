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


  //Elements
  const artContainer = document.querySelector(".art-container")

  //Card
  function renderArtCard (data) {
    data.forEach(art => {
        const artCard = document.createElement('div')
        artCard.classList.add("card")
        const artImage = document.createElement('img')
        artImage.src = art.image
       
        artCard.addEventListener("click", e => {
            console.log("Clicked!")
    })
    artCard.append(artImage)
    artContainer.append(artCard)
    })


   //     data.description
//     })
//     artCard.addEventListener ("mouseenter", (event) => {
//         data.forEach(e => {
//             data.name
//         });
//         setTimeout(() => {
//             event.target.e = "";
//         }, 1000);
//     },
//   )

    const image = document.createElement("img")
    image.src = data.forEach(e => {
        data.image}) 

    artCard.append(image)
    artContainer.append(artCard)
}
