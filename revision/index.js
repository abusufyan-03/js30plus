/* delete folder */
// const fs = require('fs');
// for(let i = 0; i<6; i++) {
//     fs.rmdirSync(`${i}.js`)
// }

const fs = require('fs');
for(let i = 6; i<12; i++){
    fs.writeFileSync(`${i}.js`, '')
}