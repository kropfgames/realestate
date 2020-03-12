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
//an input field that allows the user to sign up with a credential
//will use ajax to send the data and prevent page refresh
var signUpInputForm;
signUpInputForm = '<form id="signUpForm"><label for="signUpInputField" id="signUpLabel">Sign up with your phone number</label><br><input id="signUpInputField" type="tel" placeholder="6041234567" name="phoneNumber" required="required" pattern="[0-9]{10}"><br><button id="submitButtonText" type="submit">Send me a code</button></form>';

// makes a one-time event listener
function onetimeEventListener(node, type, callback) {

	// create event
	node.addEventListener(type, function(event) {
		// remove event
		event.target.removeEventListener(event.type, arguments.callee);
		// call handler
		return callback();
	});

}

// calls onetimeEventListener() to show input form one time when rateThisBuildingButton is clicked
// after the first click, the listener is removed
onetimeEventListener(rateThisBuildingButton, "click", showInputForm);

//updates the current content in each popup to the updated content
function showInputForm()
{
  noOneHasRatedClickToRateText = stars + "<br>" + signUpInputForm;
  rateThisBuildingButton.innerHTML = noOneHasRatedClickToRateText;
  //updates every popup
  popupAtYourLocation.update().setContent(rateThisBuildingButton);
  popupAtASpot.update().setContent(rateThisBuildingButton);
}

//listens for the submit of a phone number input to change form
rateThisBuildingButton.addEventListener("submit", showVerificationForm);

//prevents default but doesn't change form - must update form
function showVerificationForm(event)
{
    event.preventDefault();
    signUpInputForm = '<form id="sendVerificationCode"><label for="signUpInputField" id="signUpLabel">Enter the code we texted you</label><br><input id="signUpInputField" type="numbers" placeholder="123 456" size="6" required="required"><br><button id="submitButtonText" type="submit">Submit Code to Sign Up</button></form>';
    
    //updates the current content in each popup to the updated content
    showInputForm();
}

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





