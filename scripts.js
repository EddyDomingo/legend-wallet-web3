
const ethUSD = '0x9326BFA02ADD2366b30bacB125260Af641031331';
const linkUSD = '0x396c5E36DD0a0F5a5D33dae44368D4193f69a1F0';
const btcUSD = '0x6135b13325bfC4B00278B4abC5e20bbce2D6580e';

document.getElementById('price').addEventListener('click', displayPrice());
var x = document.getElementById('eth-btn');
x.addEventListener("click", displayPrice);

function displayPrice(){
// Eth/USD
    const Web3 = require("web3") // for nodejs only
    const web3 = new Web3("https://kovan.infura.io/v3/88dcfec6d0334e3288edd97747d62ac4")
    const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
    const addr = ethUSD;
    const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
    priceFeed.methods.latestRoundData().call()
        .then((roundData) => {
            // Do something with roundData
            console.log("Latest Round Data", (roundData.answer/100000000).toFixed(2))
            document.getElementById("get-price").value = (roundData.answer/100000000).toFixed(2);
        })
    

}

// Get Balance of account Ether Account 1 and 2
const Web3 = require('web3');
const url = 'https://kovan.infura.io/v3/88dcfec6d0334e3288edd97747d62ac4';
const web3 = new Web3(url);
const address = '0xa01468628D1b08078E0619876007A1D7A23A49e7';
const address2 = '0x5C7cd53617506245cce6da0e0caf314903924CbF';
const tokenAddress = '0xa36085F69e2889c224210F603D836748e7dC0088';
web3.eth.getBalance(address, (err, balance) =>{
    console.log('account 1 balance:', web3.utils.fromWei(balance, 'ether'))
    console.log((parseFloat(balance)/1000000000000000000).toFixed(4))
    const finalAmount = (parseFloat(balance)/1000000000000000000).toFixed(4)
    document.getElementById("wallet-1").innerHTML = finalAmount + " ETH"
})

//---------------
// const DollarValue = web3.eth.getBalance(address, (err, balance) =>{
//     const EthValue =  web3.utils.fromWei(balance, 'ether')
//     TotalEth = parseFloat(EthValue) * 4000;
//     return TotalEth;
  
// })
// console.log(DollarValue);

web3.eth.getBalance(address, (err, balance) => {
    if (err) {
        console.log(err);
        // do something here upon error
        return;
    }
    const EthValue =  web3.utils.fromWei(balance, 'ether')
    const TotalEth = parseFloat(EthValue) * 4000;
    console.log(TotalEth);
    
    // use TotalEth here, not outside of the callback

  });

  

//---------------

web3.eth.getBalance(address2, (err, balance) =>{
    console.log('account 1 balance:', web3.utils.fromWei(balance, 'ether'))
    console.log((parseFloat(balance)/1000000000000000000).toFixed(4))
    const finalAmount2 = (parseFloat(balance)/1000000000000000000).toFixed(4)
    document.getElementById("wallet-2").innerHTML = finalAmount2 + " ETH"
})

// Get Balance of account Link ERC20
let minABI = [
    // balanceOf
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    // decimals
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
  ];
  // Get ERC20 Token contract instance
let contract = new web3.eth.Contract(minABI,tokenAddress);
// Call balanceOf function
async function getBalance() {
    balance = await contract.methods.balanceOf(address).call();
    return balance;
  }
  getBalance().then(function (result) {
    console.log(parseFloat(result)/1000000000000000000);
    const LinkAmount = (parseFloat(balance)/1000000000000000000).toFixed(2)
    document.getElementById("wallet-link").innerHTML = LinkAmount + " LINK"
});

//----- Modal Script -----//

// Get modal
var modal = document.getElementById('myModal');
// Get Button that triggers modal
var ReceiveBtn = document.getElementById('ReceiveBtn');
//Get span that will close modal
var span = document.getElementsByClassName('close')[0];
// When the user clicks the button, open the modal 
ReceiveBtn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// -- Copy Text --//
 /* Get the text field */
// function AddressCopy(){
//     var copyText = document.getElementById("WalletAddress").textContent;
//     navigator.clipboard.writeText(copyText);
//     const copied = navigator.clipboard.readText();
//     console.log(copied)
//     // alert("Address Copied: " + copyText);
// }
// document.getElementById ("copy-img").addEventListener("click", AddressCopy());

const copyButton = document.getElementById("copy-img");
copyButton.addEventListener('click', (e) =>{
  const content = document.getElementById('WalletAddress').textContent;
  navigator.clipboard.writeText(content);
  alert("Address Copied: " + content)
})
