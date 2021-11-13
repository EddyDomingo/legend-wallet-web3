
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
    const addr = btcUSD;
    const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, addr)
    priceFeed.methods.latestRoundData().call()
        .then((roundData) => {
            // Do something with roundData
            console.log("Latest Round Data", (roundData.answer/100000000).toFixed(2))
            document.getElementById("get-price").value = (roundData.answer/100000000).toFixed(2);
        })
    

}

