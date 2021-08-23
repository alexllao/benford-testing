const fs = require('fs');

const file = require('./data/tests-data-20210823-030921.json');
let data = [];

for (let i = 0; i < file.length - 1; i++) {
    const { created_at: val1 } = file[i];
    const { created_at: val2 } = file[i + 1];

    const date1 = new Date(val1);
    const date2 = new Date(val2);
        
    const diff = Math.abs(date2 - date1);
    data.push(diff);
};

fs.writeFileSync('./data/data-tests-createdat.json', JSON.stringify(data));