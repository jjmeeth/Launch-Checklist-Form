// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) { 
      event.preventDefault();
      //variables for validation     
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel"); 
      let cargoMass = document.getElementById("cargoMass");

      //variables for shuttle requirements
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus");

      // Code for validation
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      }
      
      if (isNaN(pilotName.value) === false) {
         alert("Please enter a Pilot name using letters.");
      }

      if (isNaN(copilotName.value) === false) {
         alert("Please enter a Co-pilot name using letters.");
      }

      if (isNaN(fuelLevel.value)) {
         alert("Please enter a number for Fuel Level.");
      }

      if (isNaN(cargoMass.value)) {
         alert("Please enter a number for Cargo Mass.");
      }

      // Code for Shuttle Requirements
      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.textContent = 'There is not enough fuel for the journey.'
         launchStatus.textContent = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      } else {
         cargoStatus.textContent= 'Cargo mass low enough for launch';
      }

      if (cargoMass.value > 10000) {
         faultyItems.style.visibility = 'visible';
         cargoStatus.textContent = 'There is too much mass for the shuttle to take off';
         launchStatus.textContent = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      } else {
         cargoStatus.textContent= 'Cargo mass low enough for launch';
      }

      if (fuelLevel.value > 10000 && cargoMass.value < 10000) {
         fuelStatus.textContent = 'Fuel level high enough for launch';
         cargoStatus.textContent= 'Cargo mass low enough for launch';
         launchStatus.textContent = 'Shuttle is ready for launch';
         launchStatus.style.color = 'green';
         faultyItems.style.visibility = 'visible';
      }

      
      pilotStatus.textContent = `${pilotName.value} is ready for launch`;
      copilotStatus.textContent = `${copilotName.value} is ready for launch`;

     
   });
    
   // Fetching Planetary Data
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
           const destination = document.getElementById("missionTarget");
           destination.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[5].name}</li>
               <li>Diameter: ${json[5].diameter}</li>
               <li>Star: ${json[5].star}</li>
               <li>Distance from Earth: ${json[5].distance}</li>
               <li>Number of Moons: ${json[5].moons}</li>
            </ol>
            <img src="${json[5].image}">
           `
        })
   });

   
});


