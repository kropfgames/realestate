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

//ADDS A 'RATE' BUTTON
var rateThisBuildingButton;
var noOneHasRatedClickToRateText;

rateThisBuildingButton = document.createElement("button");
noOneHasRatedClickToRateText = " 😢<br>Click here to rate. <br>" + stars;

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

//listens for a click on neighbhorhood map and runs function to open popup
neighbourhoodMap.on('click', onMapClick);

function onStarClickLoggedOut()
{
  alert("Hello! I am an alert box!!");
}

//makes an sign up input field with a label
//must add an on submit post="/form.php"
//an input field that allows the user to sign up with a credential
var signUpInputForm;
signUpInputForm = '<form id="signUpForm" action="/userSignUp.php" method="post" name="signUpForm><label for="signUpInputField" id="signUpLabel">Sign up with your phone number</label><br><input id="signUpInputField" type="tel" placeholder="604 456 7890" name="phoneNumber"><br><input id="submitButtonText" type="submit" value="Send me a code"></form>';

// makes a one-time event listener
function onetimeEventListener(node, type, callback) {

	// create event
	node.addEventListener(type, function(e) {
		// remove event
		e.target.removeEventListener(e.type, arguments.callee);
		// call handler
		return callback();
	});

}

// calls onetimeEventListener() to call showInputForm() one time when rateThisBuildingButton is clicked
// after the first click, the listener is removed
onetimeEventListener(rateThisBuildingButton, "click", showInputForm);

//changes the popup from: its label, to: stars and sign up input field
function showInputForm(e)
{
  noOneHasRatedClickToRateText = stars + "<br>" + signUpInputForm;
  rateThisBuildingButton.innerHTML = noOneHasRatedClickToRateText;
  popupAtYourLocation.setContent(rateThisBuildingButton);
  popupAtYourLocation.update();
  popupAtASpot.update().setContent(rateThisBuildingButton);
}
 
//not working - must enable input into the input field 
//function that is called on submit of the sign up FORM
document.getElementById('signUpForm').addEventListener('submit', function(evt){

  evt.preventDefault();
  alert("did something");
  signUpInputForm = '<form id="signUpForm" action="/userSignUp.php" method="post"><label for="signUpInputField" id="signUpLabel">Enter the code we texted you</label><br><input id="signUpInputField" type="tel" placeholder="1 604 456 7890"><br><input id="submitButtonText" type="submit" value="Submit Code to Sign Up"></form>';

})



/*
what need to be done next:
-get the phone input and store it in the database
-send a code to verify their phone number
-replace the sign up form with new content 

later:
replace sign up form with content that allows the user to rate their building /5 stars
with extra rating options such as 'friendliness of neighbors', etc

Enable users to save buildings to their list of dream homes, friends’ homes, to buy homes, looking at homes, might rent homes, I lived here homes.

show data points about each building such as 'wheelchair accessible', 'location to school', etc
*/





