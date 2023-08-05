//calling the json
console.log('main.js is connected')
fetch('http://localhost:3000/art')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    nameHover(data)
    infoClick(data)
  });

  //Elements
  const artContainer = document.querySelector(".art-container")

  //Card
  const artCard = document.createElement('div')
  artCard.classList.add("card")

  const artImage = document.createElement('img')
  image.src = grabArt()

  //EventListeners

  //function that grabs each object based on the hover event
function nameHover (data) {
    return data.forEach(element => {
            data.name
        });
    }

  //function that grabs the info. based on a click event
  function infoClick (data) {
    return data.forEach(element => {
            data.description
        });
    }

    //function that grabs the image
    function grabArt (data) {
        return data.forEach(element => {
            data.image
        });
    }