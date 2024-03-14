// Write your JavaScript code here!

const { formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {

    let submitButton = document.getElementById("formSubmit");
    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");

    //When submit button is clicked, execute this code
    submitButton.addEventListener("click", function (event) {
        formSubmission(document, null, pilotName, copilotName, fuelLevel, cargoMass);
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
    
    //eventListener
    let list = this.document.getElementById("faultyItems");
    //event.prevent()
 });