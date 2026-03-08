const fs = require("fs");

const config = JSON.parse(fs.readFileSync("config.json"));

console.log("RBajee Script Starting...");
console.log("Site:", config.site);
console.log("Bet Amount:", config.bet_amount);

if(config.auto_run){
    console.log("Auto script running...");
}
