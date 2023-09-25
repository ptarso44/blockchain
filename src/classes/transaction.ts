class Transaction {

    constructor(
        public ammount: number,
        public payer: string,
        public payee: string
    ) {}

    toString() {
        return JSON.stringify(this);
    }

}

export default Transaction;