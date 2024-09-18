var colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar.js');

const argv = require('./config/yargs.js');





console.clear()

crearArchivo(argv.b,argv.l,argv.h)
    .then( Narchivo => console.log(Narchivo.rainbow))
    .catch(error => console.log(error));
