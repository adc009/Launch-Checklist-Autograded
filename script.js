// const formSubmission = require("./scriptHelper");
// const myFetch = require("./scriptHelper");

window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");
    let submitButton = document.getElementById("formSubmit");
    //change to queryselector
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    // let pilotName = pilotInput.value;
    // let copilotName = copilotInput.value;
    // let fuelLevel = fuelLevelInput.value;
    // let cargoMass = cargoMassInput.value;

    let form = document.querySelector("form")

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let formData = new FormData(this);

        let pilotName = formData.get("pilotName");
        let copilotName = formData.get("copilotName");
        let fuelLevel = formData.get("fuelLevel");
        let cargoMass = formData.get("cargoMass"); 

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass);

    });

    console.log(pilotInput);
    console.log(copilotInput);



});

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
