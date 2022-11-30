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

module.exports =Director