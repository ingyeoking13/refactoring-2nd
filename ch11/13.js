//From
function getValueForPeriod( periodNumber) {
    try {
        return values[periodNumber];
    } catch (e) {
        return 0;
    }
}

//To
function getValueForPeriod(periodNumber) {
    return (periodNumber >= values.length) ? 0: values[periodNumber]
}