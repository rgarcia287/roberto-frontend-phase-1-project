console.log('main.js is connected')
fetch('http://localhost:3000/art')
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
  });
//Timeout for name appearing


//The hovering event

//Grabbing the names


//Function that finds the name
function artName (obj) {
    return obj.map((x) => x.name);
}

//The click event

//Grabbing the rest of the data from JSON

//Function that find the descriptions
function artInfo (obj) {
    return newInfo[obj.description]
}

//Function that finds the images
function artImage (obj) {
    return newImages[obj.image]
}