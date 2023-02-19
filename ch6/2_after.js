const rating =(aDriver) => {
    return (aDriver.numberOfLateDelivereis > 5) ? 2 : 1;
}

const reportLines = (aCustomer) => {
    const lines = []
    lines.push(['name', aCustomer.name])
    lines.push(['location', aCustomer.location])
    return lines;
}
