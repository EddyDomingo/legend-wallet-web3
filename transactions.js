

// get balance from an account
// define account 
// const account1 = "ACCOUNT-NUMBER"
// //get balance
// web3.eth.getBalance(ACCOUNT, (err, balance) => {console.log(balance)})

// create account
// console.log(web3.eth.accounts.create())
//create environmental variables.
// export VARIABLE_TO_SAVE_NAME='data'
//console.log(process.env.PRIVATE_KEY_2)

//--------------------- Send Transaction and Sign Transaction -------//
var Tx = require('ethereumjs-tx').Transaction
const Web3 = require('web3');
const web3 = new Web3('https://kovan.infura.io/v3/88dcfec6d0334e3288edd97747d62ac4');

const account1 = "0xa01468628D1b08078E0619876007A1D7A23A49e7"
const account2 = "0x5C7cd53617506245cce6da0e0caf314903924CbF"

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

web3.eth.getBalance(account1, (err, balance) =>{
    console.log('account 1 balance:', web3.utils.fromWei(balance, 'ether'))
})

web3.eth.getBalance(account2, (err, balance) =>{
    console.log('account 2 balance:', web3.utils.fromWei(balance, 'ether'))
})

web3.eth.getTransactionCount(account1, (err, txCount) => {
    // 1)Build Transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.05', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }
    
     // 2)Sign Transaction
    const tx = new Tx(txObject,{'chain':42})
    tx.sign(privateKey1)
    
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    console.log("raw:", raw)
    console.log("tx:", serializedTransaction)

    // 3)Broadcast Transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) =>{
        console.log('txHash:', txHash)
        console.log(err)
    })
    // web3.eth.sendSignedTransaction('0x' + serializedTransaction .toString('hex'))
    // .on('receipt', console.log);
})



