const fs = require('fs');
const details = {
    name : 'Andrew',
    planet : 'Earth',
    age : 32
}

const detailsJSON = JSON.stringify(details);
console.log(detailsJSON);

fs.writeFileSync('1-json.json', detailsJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const stringData = dataBuffer.toString();
const parsingData = JSON.parse(stringData);
// console.log(parsingData);

parsingData.name = 'Chukka Sri Ganesh Bharadwaja';
parsingData.age = 26;

const parsingDataJSON = JSON.stringify(parsingData);
fs.writeFileSync('1-json.json',parsingDataJSON);

