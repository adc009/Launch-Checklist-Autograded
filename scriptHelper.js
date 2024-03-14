// Write your helper functions here!

const polyfill = require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget")
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `
    ;
    
   return null;
 }
 
 function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    }
    if (!isNaN(testInput)) {
        return 'Is a Number';
    }
    return 'Not a Number';
    
 }


 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //  let documentStatus = validateInput(document);
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    let validation = {
        pilot: validateInput(pilot), 
        copilot: validateInput(copilot), 
        fuel: validateInput(fuelLevel), 
        cargo: validateInput(cargoLevel)
    }

    for (const [key, value] of Object.entries(validation)) {
        if (value === 'Empty') {
            /* Alert the user that there is an empty field */
            window.alert("All fields are required.");
            return;
        }
    }

    if (validation.pilot !== "Not a Number") {
        window.alert("Pilot must be a text string.");
        return;
    }

    if (validation.copilot !== "Not a Number") {
        window.alert("Co-pilot must be a text string.");
        return;
    }

    if (validation.fuel === "Not a Number") {
        window.alert("Fuel level must be a number.");
        return;
    }

    if (validation.cargo === "Not a Number") {
        window.alert("Cargo level must be a number.");
        return;
    }
    
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    let notReady = false;

    if (fuelLevel < 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.style.color = "red";
        faultyItems.style = "visibility: visible"
        notReady = true;
        ;
    }
    if (fuelLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch"
    }


    if (cargoLevel > 10000) {
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.style.color = "red";
        faultyItems.style = "visibility: visible"
        notReady = true;
        ;
    }
    if (cargoLevel <= 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    if (!notReady) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
        launchStatus.style.color = "green";
    }

 }

 
 async function myFetch() {
     let planetsReturned;
     let res;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        res = response.json();
         });
    
     return res;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;