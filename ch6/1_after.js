const printOwing = (invoice) => {
    printBanner();
    printDetails(
        recordDueDate(invoice), 
        calculateOutStanding(invoice)
    );
}

const printBanner =() => {
    console.log("*****************");
    console.log("**** 고객 채무 ****")
    console.log("*****************");
}

const printDetails =(invoice, outstanding) => {
    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}

const recordDueDate = (invoice) => {
    const result =  { ... invoice }
    result.dueDate = new Date(clock.today.getFullYear(), clock.today.getMonth(), clock.today.getDate())
    return result
}

const calculateOutStanding = (invoice) => {
    return invoice.orders.reduce((result, order) => order.amount + result, 0)
}