import "./ListaOpciones.css";
import { useState } from "react";
import { Form, Link } from "react-router-dom";

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map ((equipo)=> {
    // return <option></option>
    // })
    const Categorias = [
        "Front End",
        "Back End",
        "Innovación y Gestión",
      ]

      const manejarCambio = (e) => {
        props.actualizarCategoria(e. target.value)
    }


  

    return <div className="lista-opciones">
        <label>Categoria</label>
        <select value={props.valor} onChange={manejarCambio} className="select">
            <option value="" defaultValue="" hidden>Seleccionar categoria</option>
            {Categorias.map( (Categorias, index) => {
                return <option key={index}>{Categorias}</option>
            } ) }
        </select>
    </div>    
}

export default ListaOpciones