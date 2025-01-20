import React from 'react';
import { useState } from 'react';
import "./Cards.css";
import Modal from '../Modal-Formulario/Modal';

const Cards = (props) => {

    const {datos, cambiarMostrar, border, eliminarCard} = props;

    console.log(props)

    const { titulo,categoria, imagen, video, descripcion } = props.datos


  return (
    <div className="Cards" style={props.style}>
      <div className="Imagen" style={props.style}>
        <img 
          className="imagenVideo" 
          src={imagen}
          alt={titulo}
        />
      </div>
      <div className="Botones">

        {/* Botón para eliminar */}
        <button className="borrar" onClick={() => eliminarCard(titulo)}>
          <img src="borrar.svg" alt="Borrar" /> BORRAR
        </button>

        {/* Botón para abrir/cerrar el modal */}
        <button className="editar" onClick={cambiarMostrar}>
          <img src="Editar.svg" alt="Editar" /> EDITAR
        </button>

        
      </div>

     
    </div>
  );
};

export default Cards;
