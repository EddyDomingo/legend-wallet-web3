const Web3 = require('web3');
const { EtherSymbol } = require('./dist/bundle');
const url = 'https://kovan.infura.io/v3/88dcfec6d0334e3288edd97747d62ac4';
const web3 = new Web3(url);

//read balance of account
const address = '0xa01468628D1b08078E0619876007A1D7A23A49e7';
web3.eth.getBalance(address, (err, balance) =>{
    console.log('account 1 balance:', web3.utils.fromWei(balance, 'ether'))
})
