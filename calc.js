let colors = require('colors');
const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let argv2 = process.argv;
// let base = argv.split('=')[1];
// console.log(argv.base);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite).then(msg => {
            console.log(msg);
        }).catch(err => {
            console.log(err);
        });
        break;

    default:
        console.log('Comando no reconocido'.red);
        break;
}