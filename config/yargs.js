const opt = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    },
};

const argv = require('yargs')
    .command('listar', 'Imprimime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo de texto con las tablas', opt)
    .help().argv;

module.exports = {
    arvg: argv,
};