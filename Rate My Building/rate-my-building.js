//DRAWS THE MAP
var neighbourhoodMap = L.map('mapDiv').setView([49.2835, -123.1153], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(neighbourhoodMap);

var circle = L.circle([49.2835, -123.1153], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(neighbourhoodMap);

//DRAWS FIRST POPUP AT YOUR LOCATION

var stars;
stars = " <br>☆☆☆☆☆";

var noOneHasRatedClickToRateText;
noOneHasRatedClickToRateText = " 😢<br>Click here to rate." + stars;

//ADDS A 'RATE' BUTTON
//makes a button that enables user to rate
var rateYourLocationButton;
rateYourLocationButton = document.createElement("button");
rateYourLocationButton.innerHTML = "No one has rated your building!" + noOneHasRatedClickToRateText;

var rateThisBuildingButton;
rateThisBuildingButton = document.createElement("button");
rateThisBuildingButton.innerHTML = "No one has rated this building!" + noOneHasRatedClickToRateText;

//makes a popup upon loading the page
var popupAtYourLocation = L.popup()
    .setLatLng([49.2835, -123.1153])
    .setContent(rateYourLocationButton)
    .openOn(neighbourhoodMap);

//DRAWS POPUP AT CLICKED LOCATION
var popupAtASpot = L.popup();
//must change latlng to address 
function onMapClick(spotOnMap) {
    popupAtASpot
        .setLatLng(spotOnMap
                  .latlng)
        .setContent(rateThisBuildingButton)
        .openOn(neighbourhoodMap);
}

//lists for a click on neighbhorhood map and runs function to open popup
neighbourhoodMap.on('click', onMapClick);

function onStarClickLoggedOut()
{
  //make a popup that says: "Sign up with email";
}

stars.on('click', onStarClickLoggedOut());

//⭐

//working on 
/*
var markerAtYourLocation = L.marker([49.2835, -123.1153]).bindPopup('No one has rated your building! <br>' + rateButton).addTo(neighbourhoodMap);
markerAtYourLocation.openPopup();
*/

//rateButton.addEventListener ("click", function() {
//  alert("did something");
//});

//need to add a button saying Rate now
//must make "Rate now" clickable
//on mouse click on Rate Now, open a picture of the house, as well as 5 stars

/*
//changing the content on mouseover
markerAtYourLocation.on('mouseover', function(){
    //make a label "Sign Up with Email"
    //must make an input selector of stars
    //markerAtYourLocation._popup.setContent('*****');
    //on click of stars, open popup to enter email
  //must add an input field for their email with placeholder text - Sign up with Email

});
*/








//not working :( 
//Makes a marker and adds button's inner HTML content
//var markerAtYourLocation = L.marker([49.2835, -123.1153]).addTo(neighbourhoodMap);

/*
var popupAtYourLocation = L.popup()
    .setLatLng([49.2835, -123.1153])
    .setContent("No one has rated your building! <br>Rate now.")
    .openOn(neighbourhoodMap);
*/
