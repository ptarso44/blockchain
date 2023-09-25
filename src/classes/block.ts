import * as crypto from 'crypto';
import Transaction from './transaction';
import applicationConfig from '../config/config';

class Block {

    public nonce = Math.round(Math.random() * 999999999);

    constructor(
        public prevHash: string,
        public transaction: Transaction,
        public ts = Date.now(),
    ) {}

    get hash() {
        const str = JSON.stringify(this);
        const hash = crypto.createHash(applicationConfig.hashType);
        hash.update(str).end();
        return hash.digest('hex');
    }

}

export default Block;