const arvg = require('./config/yargs').arvg;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
var colors = require('colors');

let comando = arvg._[0];
console.log('Comando: ', comando);

switch (comando) {
    case 'listar':
        listarTabla(arvg.base, arvg.limite)
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        break;
    case 'crear':
        crearArchivo(arvg.base, arvg.limite)
            .then((archivo) =>
                console.log('Archivo creado: ' + `${archivo}`.green),
            )
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}