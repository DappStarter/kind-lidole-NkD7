require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food shoot rate sad million coral light army ghost'; 
let testAccounts = [
"0x81f94cfa45bf77f4a32a697ec0c9db88e4d0a83fb084b3a295832ec6a6f04534",
"0x59db5d246b1ad9542ac99fe47ba486ab224e445bf1b8ca08b07f0c73b5deec77",
"0xa67c3267487f7dfc8b7c298b890f452ad1391c66016510fefc73137657415f0b",
"0xc3488a1221b537bbb935a1ca51040290bd19974b8e62d859ce69dd5f9e3b3351",
"0x65dd8310d88434263eb8df37850b3809e7d79fc399d3fa13de84beb9d649c8ad",
"0xbfafe193c0a9e5dc28b4dfa9ff7e0623c27043e77340ab1f79fc2ad574ee4073",
"0x88b99e653fae87c5e2e854c01e50a40083f821fdeae408411b887688728f2c1f",
"0x72ce8151b624197dca125314b1a667a540d282fa35d23f8080c0faa22d9c7b43",
"0x20a79ef8d081f59a51e255a665105aecdba190e8340d1075099d1768f8825aaa",
"0xe514b2a90850f91431aee81bd827566201e3074ee9f134c3c5f7017f8c384305"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


