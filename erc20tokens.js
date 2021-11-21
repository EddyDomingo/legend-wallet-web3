const Web3 = require("web3") // for nodejs only
const web3 = new Web3("https://kovan.infura.io/v3/88dcfec6d0334e3288edd97747d62ac4")

let tokenAddress = "0xa36085F69e2889c224210F603D836748e7dC0088";
let walletAddress = "0xa01468628D1b08078E0619876007A1D7A23A49e7";


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
    balance = await contract.methods.balanceOf(walletAddress).call();
    return balance;
  }

  getBalance().then(function (result) {
    console.log(parseFloat(result)/1000000000000000000);
});