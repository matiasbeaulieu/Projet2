// const express = require("express");

// const router = express.Router();


// router.get("/", (req, res) => {

//     res.send("Need a POST request plz!");

// });


// router.post("/", async (req, res) => {

//     // Extract type and value from the request body

//     const { type, value } = req.body;

//     // Check if the type is "feet2meter" and the value is a valid number

//     if (type.toLowerCase() === "feet2meter" && !isNaN(value)) {

//         // log to server console for debugging
//         console.log("received data: " + req.body.type + " for " + req.body.value);
//         // Convert value from feet to meters (1 foot = 0.3048 meters)
//         const meters = parseFloat(value) * 0.3048;
//         // Log the received data and the converted value
//         console.log(`Received data: ${value} feet. Converted to ${meters} meters.`);
//         // Send the converted value in the response
//         res.send(`Converted value: ${meters} meters.`);

//     } else if (type.toLowerCase() === "meter2feet" && !isNaN(value)){

//         console.log("received data: " +req.body.type + " for "+req.body.value);
//         const feets = parseFloat(value) / 0.3048;
//         console.log(`Received data: ${value} feet. Converted to ${feets} meters.`);
//         res.send(`Converted value: ${feets} meters.`);
//     } 
//     else if (type.toLowerCase() === "kilo2livre" && !isNaN(value)) {

//         console.log("Received data: " + req.body.type + " for " + req.body.value);
//         const pounds = parseFloat(value) * 2.20462;
//         console.log(`Received data: ${value} kilograms. Converted to ${pounds} pounds.`);
//         res.send(`Converted value: ${pounds} pounds.`);
//     } 
//     else if (type.toLowerCase() === "livre2kilo" && !isNaN(value)) {

//         console.log("Received data: " + req.body.type + " for " + req.body.value);
//         const kilograms = parseFloat(value) / 2.20462;
//         console.log(`Received data: ${value} pounds. Converted to ${kilograms} kilograms.`);
//         res.send(`Converted value: ${kilograms} kilogram.`);
//     }
//     else if (type.toLowerCase() === "celsius2fahrenheit" && !isNaN(value)) {

//         console.log("Received data: " + req.body.type + " for " + req.body.value);
//         const fahrenheit = (parseFloat(value) * 9/5) + 32;
//         console.log(`Received data: ${value} degrees Celsius. Converted to ${fahrenheit} degrees Fahrenheit.`);
//         res.send(`Converted value: ${fahrenheit} degrees Fahrenheit.`);
//     } 
//     else if (type.toLowerCase() === "fahrenheit2celsius" && !isNaN(value)) {

//         console.log("Received data: " + req.body.type + " for " + req.body.value);
//         const celsius = (parseFloat(value) - 32) * 5/9;
//         console.log(`Received data: ${value} degrees Fahrenheit. Converted to ${celsius} degrees Celsius.`);
//         res.send(`Converted value: ${celsius} degrees Celsius.`);
//     }
//     else if (type.toLowerCase() === "litre2gallon" && !isNaN(value)) {
//         console.log("Received data: " + req.body.type + " for " + req.body.value);
//         // Convert value from liters to gallons (1 liter = 0.264172 gallons US)
//         const gallons = parseFloat(value) * 0.264172;
//         // Log the received data and the converted value
//         console.log(`Received data: ${value} liters. Converted to ${gallons} gallons.`);
//         // Send the converted value in the response
//         res.send(`Converted value: ${gallons} gallons.`);
//     } 
//     else if (type.toLowerCase() === "gallon2litre" && !isNaN(value)) {
//         console.log("Received data: " + req.body.type + " for " + req.body.value);
//         // Convert value from gallons to liters (1 gallonUS = 3.78541 liters)
//         const litres = parseFloat(value) * 3.785;
//         // Log the received data and the converted value
//         console.log(`Received data: ${value} gallons. Converted to ${litres} liters.`);
//         // Send the converted value in the response
//         res.send(`Converted value: ${litres} liters.`);
//     }
//     else if (type.toLowerCase() === "gravity2meterspersecondsquared" && !isNaN(value)) {
//     console.log("Received data: " + req.body.type + " for " + req.body.value);
//     // Convert value from gravity (g) to meters per second squared (m/s²)
//     // 1 g ≈ 9.80665 m/s² (standard acceleration due to gravity on Earth)
//     const mps2 = parseFloat(value) * 9.80665;
//     console.log(`Received data: ${value} g. Converted to ${mps2} m/s².`);
//     res.send(`Converted value: ${mps2} m/s².`);
//     }
//     else if (type.toLowerCase() === "meterspersecondsquared2gravity" && !isNaN(value)) {
//     console.log("Received data: " + req.body.type + " for " + req.body.value);
//     // Convert value from meters per second squared (m/s²) to gravity (g)
//     // 1 g ≈ 9.80665 m/s² (standard acceleration due to gravity on Earth)
//     const gravite = parseFloat(value) / 9.80665;
//     console.log(`Received data: ${value} m/s². Converted to ${g} g.`);
//     res.send(`Converted value: ${gravite} gravité.`);
// }
//     else {

//         // If the type is defined or the value is not a valid number, send an error response

//         res.status(400).send("Entrée invalide.");

//     }

//   });


// module.exports = router;
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Need a POST request plz!");
});

router.post("/", async (req, res) => {
    const { type, value } = req.body;
    let resultat;
    let message;

    switch (type.toLowerCase()) {
        case "feet2meter":
            resultat = parseFloat(value) * 0.3048;
            unite = "mètres"
            message = `${value} feet converted to ${resultat} meters.`;
            break;
        case "meter2feet":
            resultat = parseFloat(value) / 0.3048;
            unite = "pieds"
            message = `${value} meters converted to ${resultat} feet.`;
            break;
        case "kilo2livre":
            resultat = parseFloat(value) * 2.20462;
            unite = "livres"
            message = `${value} kilograms converted to ${resultat} pounds.`;
            break;
        case "livre2kilo":
            resultat = parseFloat(value) / 2.20462;
            unite = "Kilogrammes"
            message = `${value} pounds converted to ${resultat} kilograms.`;
            break;
        case "celsius2fahrenheit":
            resultat = (parseFloat(value) * 9/5) + 32;
            unite = "fahrenheits"
            message = `${value} degrees Celsius converted to ${resultat} degrees Fahrenheit.`;
            break;
        case "fahrenheit2celsius":
            resultat = (parseFloat(value) - 32) * 5/9;
            unite = "celsuis"
            message = `${value} degrees Fahrenheit converted to ${resultat} degrees Celsius.`;
            break;
        case "litre2gallon":
            resultat = parseFloat(value) * 0.264172;
            unite ="gallons"
            message = `${value} liters converted to ${resultat} gallons.`;
            break;
        case "gallon2litre":
            resultat = parseFloat(value) * 3.78541;
            unite ="litres"
            message = `${value} gallons converted to ${resultat} liters.`;
            break;
        case "gravite2meterspersecondsquared":
            resultat = parseFloat(value) * 9.80665;
            unite = "m/s²"
            message = `${value} g converted to ${resultat} m/s².`;
            break;
        case "meterspersecondsquared2gravite":
            resultat = parseFloat(value) / 9.80665;
            unite = "gravités"
            message = `${value} m/s² converted to ${resultat} g.`;
            break;
        default:
            res.status(400).send("Entrée invalide.");
            return;
    }

    console.log(`Données reçues : ${type} pour ${value}`);
    console.log(message);
    res.send(`Valeur convertie : ${resultat} ${unite}.`);
});

module.exports = router;

//https://www.convertworld.com/fr/acceleration/gravite-standard.html  --> pour la conversion de la gravité