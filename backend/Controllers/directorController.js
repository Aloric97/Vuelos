const director = require('../models/director')


//buscar todas las consultas
const findAll = async function (req, res) {
    try {
       const directors = await director.findAll();
       res.json(directors)
    } catch (error) {
        res.sen(error)
    }
}

//buscar solo por apellido y nombre
const findByNombreApellido = async function(req,res){
    const nombre=req.params.nombre
    const apellido=req.params.apellido
    const response= await director.findAll({
        where: {apellido: apellido, nombre:nombre}

    })
    .then((data)=>{
        const res= {message:data}
        return res;
    })
    .catch((error)=>{
        const res={message:error};
        return res;
    })

    res.json(response);
}



module.exports ={
    findAll,
    findByNombreApellido
}