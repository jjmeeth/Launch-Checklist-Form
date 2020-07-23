// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) { 
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
         event.preventDefault();
      }
      
      if (isNaN(pilotName.value) === false) {
         alert("Please enter a Pilot name using letters.");
         event.preventDefault();
      }

      if (isNaN(copilotName.value) === false) {
         alert("Please enter a Co-pilot name using letters.");
         event.preventDefault();
      }

      if (isNaN(fuelLevel.value)) {
         alert("Please enter a number for Fuel Level.");
         event.preventDefault();
      }

      if (isNaN(cargoMass.value)) {
         alert("Please enter a number for Cargo Mass.");
         event.preventDefault();
      }

      // Code for Shuttle Requirements
      if (fuelLevel.value < 10000) {
         faultyItems.style.visibility = 'visible';
         fuelStatus.textContent = 'There is not enough fuel for the journey.'
         launchStatus.textContent = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      }

      if (cargoMass.value > 10000) {
         faultyItems.style.visibility = 'visible';
         cargoStatus.textContent = 'There is too much mass for the shuttle to take off';
         launchStatus.textContent = 'Shuttle not ready for launch';
         launchStatus.style.color = 'red';
      }

      if (fuelLevel >= 10000 && cargoMass <= 10000) {
         launchStatus.textContent = 'Shuttle is ready for launch"';
         launchStatus.style.color = 'green';
      }

      
      pilotStatus.textContent = `${pilotName.value} is ready for launch`;
      copilotStatus.textContent = `${copilotName.value} is ready for launch`;
   });
   

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

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
