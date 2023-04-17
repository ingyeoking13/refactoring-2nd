//FROM 
targetTemparature(aPlan)

function targetTemperature(aPlan) {
    currentTemperature = thermostat.currentTemperature;
}

// TO
targetTemparature(aPlan, thermostat.currentTemperature)
targetTemperature(aPlan, currentTemperature) {

}