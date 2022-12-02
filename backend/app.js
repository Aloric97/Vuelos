//librerias instaladas
const express = require('express');
const config= require('dotenv').config()
const directorRoutes= require('./routes/directorRoutes')
const cors = require('cors')



// importaciones desde carpetas locales
const db = require('./models/db')


// variable app para ejecutar modulos de express
const app = express();

//habilitar el cors para que se pueda hacer peticiones
app.use(cors());

async function conectar(){
    try {
        await db.authenticate();
        await db.sync( );
        console.log('conexion se ha establecido correctamente');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//conexion a la base de datos
conectar()



app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(directorRoutes)
//codigo referido al servidor

const PORT = process.env.PORT || 3001

app.listen(PORT, (req,res)=>{
    console.log('Conexion al servidor')
})
