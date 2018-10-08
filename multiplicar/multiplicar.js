const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    for (let i = 1; i < limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(colors.red(`El parametro ${ colors.yellow(base) } no es un numero!`));
            return;
        }
        if (!Number(limite)) {
            reject(`El parametro "${ limite }" no es un numero!`);
            return;
        }
        let data = '';
        for (let i = 1; i < limite; i++) {
            data += `${ base } x ${ i } = ${ base * i } \n`;
        }
        fs.writeFile(`tablas/tabla-${ base }_al-${ limite }.txt`, data, (err) => {
            if (err) {
                reject('No se pudo crear el archivo!'.red);
            }
            resolve(`El archivo tabla-${ base }_al-${ limite }.txt se creo con exito!`.green);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};