

const Error= function(error,request, response, next) {
    const err= new Error("not Found")
    err.status=404
    console.error(err)
    return next(err)
}


module.exports =Error;