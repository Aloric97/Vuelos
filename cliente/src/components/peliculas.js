import { Table } from "react-bootstrap"
import {useState, useEffect} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//css
import  './css/peliculas.css'



function Peliculas(){
    const [isLoading, setIsLoading] = useState(true);
    const [directores, setDirectores]=  useState([])
    const [busqueda, setBusqueda]= useState("");


    //peticion al endpoint para traer los json
    const getPeticiones= async ()=>{
        const response= await fetch('http://127.0.0.1:3001/directores')
        const data = await response.json();
        setDirectores(data)
        setIsLoading(false)
    }

    const searcher = (e) => {
        setBusqueda(e.target.value) 
    }

   // busqueda un elemento
    let resultado=[]
    if (!busqueda){
        resultado=directores
    }else{
        resultado= directores.filter(valor=>valor.apellido.toLowerCase().includes(busqueda.toLowerCase()))
    }


    //traer los directores
    useEffect( () => {
        getPeticiones()
    }, [] )
    

    //cargar la pagina
    if (isLoading) {
        return (
          <div className="App">
            <h1>Cargando...</h1>
          </div>
        );
      }

    return(<>
     <div className="container mt-3">
        <div className="container" id="filtro" >
            <button className="btn btn-success">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
            <input value={busqueda} onChange={searcher} type="text" placeholder='Buscar por apellido' className='form-control'/>
        </div>
        <Table className="mt-5" striped bordered hover size="sm"  >
            <thead>
                <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>DNI</th>
                <th>Fecha_nacimiento</th>
                <th>Fecha_alta</th>
                </tr>
            </thead>
            <tbody>
                {resultado.map(peli=>{
                    return (
                        <tr key={peli.id}>
                            <td>{peli.id}</td>
                            <td>{peli.nombre}</td>
                            <td>{peli.apellido}</td>
                            <td>{peli.DNI}</td>
                            <td>{peli.fecha_nacimiento}</td>
                            <td>{peli.fecha_alta}</td>
                        </tr>
                   )
                 })}   
            </tbody>
        </Table>
     </div>
    
    </>)
}

export default Peliculas