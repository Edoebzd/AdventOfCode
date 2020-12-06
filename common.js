const fs = require('fs');
const readline = require('readline');

const readFile = path => {
return new Promise ((resolve, reject) => {
  let readInterface = readline.createInterface({
    input: fs.createReadStream(path)
  })
  let data = []
  readInterface.on('line', line => data.push(line))
  readInterface.on('close', e => resolve(data))
})
}


module.exports = {readFile
                 };
