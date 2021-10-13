require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note six prosper include clip surge vacuum'; 
let testAccounts = [
"0x7f888a4417a01221c65590492ae1388da152bd4d53cdda80d53488f425ce1d86",
"0xd53a8620401d8357bb25439349a4582a2a0fb545f2659139bb89161ea3da9a01",
"0x58c34452cff6621045fc2ca1d311605db5731c23e9d4aa225c98cecc31a2ada1",
"0xba689a094856541cc5a80e899d6193693f65651485495f3ef1b7b0c4db46abdc",
"0x24edaf7f0c3d3c1c6b56d912742cfb40d7cc7155e82c8d7dcf0bf5446920dc5d",
"0x47ec9f4741b6eeaf84c52b52d8583cd60a2e268c7ce2a0ebcc43cb3973fed7e0",
"0x724b77f8c4478b2ef81bfa909cbffe8146dfca5262145288a021df4cdbe55573",
"0xcf9e1771fe1b89308d1970edf8acbb1bfacc5246822f62dac3fa5ee4b28ac1dc",
"0xc6d981a0b71ed5f905cfe16bbce80f5824b74008788f3a66b2a937c079f6eb85",
"0xe402681834a091d2752033ffa1a8f165492db3b58ba883bd86a9983e117d43d4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

