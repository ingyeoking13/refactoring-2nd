const printOwing = (invoice) => {
    let outstanding = 0;

    console.log("*****************");
    console.log("**** 고객 채무 ****")
    console.log("*****************");

    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    const today = clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())

    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}