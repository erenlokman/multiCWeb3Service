const Moralis = require("moralis/node");

// const serverUrl = "YOUR-SERVER-URL";
// const appId = "YOUR-APP-ID";
// const masterKey = "YOUR-MASTER-KEY";

const watchAddr = async () => {
    await Moralis.start({ serverUrl, appId, masterKey });

    await Moralis.Cloud.run(
        "watchBscAddress",
        { address: "0x6AA217312960A21aDbde1478DC8cBCf828110A67" },
        { useMasterKey: true }
    ).then((result: any) => {
        console.log(result);
    });
};

watchAddr();