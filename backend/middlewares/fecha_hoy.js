
const fecha_hoy = function obtener_fecha(req, res, next) {
    const fecha_hoy= new Date();
    let anio= fecha_hoy.getFullYear()
    let mes = fecha_hoy.getMonth()
    let dia = fecha_hoy.getDate()
    console.log(`fecha de consulta:${anio}-${mes}-${dia}`);
    next();
}


module.exports = fecha_hoy