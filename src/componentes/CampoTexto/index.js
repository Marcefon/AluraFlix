import { useState } from "react";
import { Form, Link } from "react-router-dom";
import "./CampoTexto.css"




const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) => {
        props.actualizarValor (e.target.value)
    }




    return <div className="campo-texto">
        <label className="label">{props.titulo}</label>
        <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        
        />
    </div>
}

export default CampoTexto