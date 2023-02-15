interface Play {
    name: string;
    type: string;
}

interface Performance {
    playID: string;
    audience: number;
}

interface Invoice { 
    customer: string;
    performances: Performance[];
}

