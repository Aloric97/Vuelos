const {DataTypes}= require('sequelize')
const db= require('../models/db')

const Director= db.define("director",{

    nombre:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    apellido:{
        type:DataTypes.STRING, 
        allowNull:false,
    },
    DNI:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    fecha_nacimiento:{
        type:DataTypes.DATE
    },
    fecha_alta:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }},

    {
        timestamps: false,
        tableName: 'director'
    }
)

const jane = Director.build({
    nombre:'leandro',
    apellido:'tombetta',
    DNI:'40035310',
    fecha_nacimiento:'1997-01-10'
})
console.log(jane instanceof Director); // true

jane.save()
module.exports =Director