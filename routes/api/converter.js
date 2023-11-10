
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
            res.status(400).send("Le type entrée est invalide.");
            return;
    }

    console.log(`Données reçues : ${type} pour ${value}`);
    console.log(message);
    if (isNaN(value) || (typeof value === 'string' && value.trim() === '')|| typeof value === 'symbol'){
       
        res.send('La valeur choisit est invalide!');
        
    }
    else{
         res.send(`Valeur convertie : ${resultat} ${unite}.`);
    }
});

module.exports = router;

//https://www.convertworld.com/fr/acceleration/gravite-standard.html  --> pour la conversion de la gravité