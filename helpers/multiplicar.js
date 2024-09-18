
const fs = require('fs');
var colors = require('colors/safe');
const crearArchivo = async (base = 5 , listar= false,hasta=12) =>{
    try{
        let salida = '';
        let consola = '';

        for(let i = 1; i<=hasta;i++){
            salida += `${base}x${i} = ${base*i}\n` ;
            consola += colors.rainbow(`${base}`) + colors.green('x')+ colors.blue(`${i}`) + '=' + colors.brightMagenta(`${base*i}\n`) ;
        }

        if(listar){
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return `tabla creada ${base}`;

    }catch(error){

        throw error
        
    }
}

module.exports={
    crearArchivo,
}