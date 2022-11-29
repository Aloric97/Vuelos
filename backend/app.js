//librerias instaladas
const express = require('express');
const config= require('dotenv').config()



// importaciones desde carpetas locales

const db = require('./models/db')

async function conectar(){
    try {
        await db.authenticate();
        await db.sync( );
        console.log('conexion se ha establecido correctamente');
        await db.close();
        console.log('conexion cerrada')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

conectar()

//conexion a la base de datos

// variable app para ejecutar modulos de express
const app = express();

//codigo referido al servidor

const PORT = process.env.PORT || 3000

app.listen(PORT, (req,res)=>{
    console.log('Conexion al servidor')
})
