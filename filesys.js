const fs = require('fs');

let data = [{
        id: 1,
        name: 'Perdo',
        age: 35
    },
    {
        id: 2,
        name: 'Laura',
        age: 25
    },
    {
        id: 3,
        name: 'Maria',
        age: 29
    },
];

fs.writeFile('libreta.txt', JSON.stringify(data), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('El archivo se creo con exito');
        fs.readFile('libreta.txt', (err, data) => {
            if (err) {
                throw err
            } else {
                console.log(JSON.parse(data));
            }
        });
    }
});