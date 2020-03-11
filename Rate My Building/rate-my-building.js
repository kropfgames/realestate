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
stars = "☆☆☆☆☆";

var noOneHasRatedClickToRateText;
noOneHasRatedClickToRateText = " 😢<br>Click here to rate. <br>" + stars;

//ADDS A 'RATE' BUTTON
//makes a button that enables user to rate
var rateThisBuildingButton;
rateThisBuildingButton = document.createElement("button");
rateThisBuildingButton.innerHTML = "No one has rated this building!" + noOneHasRatedClickToRateText;

//might have to make a function to update the variable value of noOneHasRatedClickToRateText

//makes a popup upon loading the page
var popupAtYourLocation = L.popup()
    .setLatLng([49.2835, -123.1153])
    .setContent(rateThisBuildingButton)
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
  //append text saying "Sign up with email";
  alert("Hello! I am an alert box!!");
  //popupAtYourLocation.update();
}

//an input field that allows the user to sign up with a credential
var signUpInputField;
<!--makes an sign up input field with a label -->
signUpInputField = '<form id="signUpForm"><label for="signUpInputField">Sign up with your phone number</label><br><input id="signUpInputField" type="text" placeholder="1 604 456 7890"><br><input id="submitButtonText" type="submit" value="Send me a code"></form>';

//listens for a click on a popup to enable signing up
//the alert works but the popup doesn't update
rateThisBuildingButton.addEventListener ("click", function() {
  //alert("did something");
  noOneHasRatedClickToRateText = stars + "<br>" + signUpInputField;
  rateThisBuildingButton.innerHTML = noOneHasRatedClickToRateText;
  popupAtYourLocation.setContent(rateThisBuildingButton);
  popupAtYourLocation.update();
  popupAtASpot.update().setContent(rateThisBuildingButton);
});