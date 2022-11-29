
const fecha_hoy = function obtener_fecha() {
    const fecha_hoy= new Date();
    let anio= fecha_hoy.getFullYear()
    let mes = fecha_hoy.getMonth()
    let dia = fecha_hoy.getDate()
    console.log(`${anio}-${mes}-${dia}`);
}


module.exports = fecha_hoy