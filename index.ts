import Chain from "./src/classes/chain";
import Wallet from "./src/classes/wallet";

const fulano = new Wallet();
const sicrano = new Wallet();
const beltrano = new Wallet();

fulano.sendMoney(50, sicrano.publicKey);
sicrano.sendMoney(23, beltrano.publicKey);
beltrano.sendMoney(5, sicrano.publicKey);

console.log(Chain.instance)