const argv =require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'ingrese el numero que desea multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default: false,
        describe:'para listar la tabla'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 12,
        describe:'ingrese hasta que numero quiere multiplicar'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'la base tiene que ser un numero '
        }
        return true;
    })
    .argv

module.exports = argv