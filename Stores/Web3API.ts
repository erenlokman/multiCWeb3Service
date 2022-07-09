const Moralis = require("moralis/node");

// const serverUrl = "YOUR-SERVER-URL";
// const appId = "YOUR-APP-ID";
// const masterKey = "YOUR-MASTER-KEY";

const web3API = async () => {
    await Moralis.start({ serverUrl, appId, moralisSecret });

    const price = await Moralis.Web3API.token.getTokenPrice({
        address: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        chain: "bsc",
    });
    console.log(price);
};

web3API();