
// from 
function getTotalOutstandingAndSendBill() {
    const result = customser.invoices.reduce((total, each) => each.amount + total, 0);
    sendBill();
    return result
}

// to

function totalOutstanding(){
    return cusomter.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
    emailGateway.send(formatBill(customer));
}

// step 1
function alertForMiscreant(people){
    for (const p of people ) {
        if (p === 'joker') {
            setOffAlarms();
            return 'joker';
        }
        if (p === 'saruman') {
            setOffAlarms();
            return 'saruman';
        }
    }
    return ''
}

const found = alertForMiscreant(people);


// to

function findMiscreant(people){
    for (const p of people ) {
        if (p === 'joker') {
            return 'joker';
        }
        if (p === 'saruman') {
            return 'saruman';
        }
    }
    return ''
}

function alertForMiscreant(people){
    if (findMiscreant(people) !== '') setOffAlarms(); 
}

const found = findMiscreant(people);
alertForMiscreant(found);