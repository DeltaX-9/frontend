const baseAPIURL = "http://localhost:5115";
const getTransactionData = async (tx_hash, btc_chain) => {
    const tx_route = "/blockchain/transaction";
    const url = baseAPIURL + tx_route + `/${tx_hash}` + `?btc_chain=${btc_chain}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const getInfo = async () => {
    console.log("getInfo");
}
