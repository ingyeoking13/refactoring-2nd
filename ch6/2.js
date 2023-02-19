const rating =(aDriver) => {
    return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

const moreThanFiveLateDeliveries = (aDriver) => {
    return aDriver.numberOfLateDelivereis > 5;
}


const reportLines = (aCustomer) => {
    const lines = []
    gatherCustomerData(lines, aCustomer);
    return lines;
}

const gatherCustomerData = (out, aCustomer) => {
    out.push(['name', aCustomer.name])
    out.push(['location', aCustomer.location])
}