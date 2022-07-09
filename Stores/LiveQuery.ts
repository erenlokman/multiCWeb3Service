const Moralis = require("moralis/node");

// const serverUrl = "YOUR-SERVER-URL";
// const appId = "YOUR-APP-ID";
// const masterKey = "YOUR-MASTER-KEY";

const LiveQuery = async () => {
    await Moralis.start({ serverUrl, appId, masterKey });

    const Monster = Moralis.Object.extend("Monster");
    const query = new Moralis.Query(Monster);

    let subscription = await query.subscribe();
    console.log(subscription);
};

LiveQuery();