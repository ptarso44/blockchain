import Block from "./block";
import Transaction from "./transaction";
import * as crypto from 'crypto';

class Chain {
    public static instance = new Chain(); // Singleton instance
    chain: Block[];

    constructor() {
        this.chain = [ new Block( '', new Transaction(100, 'genesis', 'adam') ) ]
    }

    get lastBlock() {
        return this.chain[this.chain.length-1];
    }

    addBlock(transaction: Transaction, senderPublicKey: string, signature: Buffer) {
        const verifier = crypto.createVerify('SHA256');
        verifier.update(transaction.toString());

        const isValid = verifier.verify(senderPublicKey, signature);

        if (isValid) {
            const newBlock = new Block(this.lastBlock.hash, transaction);
            this.chain.push(newBlock);
        }
    }

    mine(nonce: number) { // simplified for the sake of not making mining take long
        let solution = 1; 
        console.log('Mining...');


        while(true) {
            const hash = crypto.createHash('MD5');
            hash.update( (nonce + solution).toString() ).end();

            const attempt = hash.digest('hex');


            if (attempt.substring(0, 4) === '0000') {
                console.log(`Solved: ${solution}`);
                return solution;
            }


            solution +=1;
        }
    }

}

export default Chain;