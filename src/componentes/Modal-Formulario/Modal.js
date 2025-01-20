import React, { useState } from "react";
import "./Modal.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Modal = ({ cambiarMostrar }) => {
    const [titulo, actualizarTitulo] = useState("");
    const [categoria, actualizarCategoria] = useState("");
    const [imagen, actualizarImagen] = useState("");
    const [video, actualizarVideo] = useState("");
    const [descripcion, actualizarDescripción] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("manejar el envio");
        let datosAEnviar = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion,
        };
        console.log(datosAEnviar); // Muestra los datos enviados para depuración
    };

    return (
        <div className="modal-overlay">
            <form onSubmit={manejarEnvio} className="form">
                <img onClick={cambiarMostrar} className="close" src="./close.svg" alt="close" />
                <div className="camposForm">
                    <h3>EDITAR CARD:</h3>
                    <CampoTexto
                        titulo="Título"
                        placeholder="Ingrese el título"
                        required
                        valor={titulo}
                        actualizarValor={actualizarTitulo}
                    />

                    <ListaOpciones
                        valor={categoria} // Pasamos el estado "categoria"
                        actualizarCategoria={actualizarCategoria} // Pasamos la función de actualización
                        required
                    />

                    <CampoTexto
                        titulo="Imagen"
                        placeholder="Ingrese el enlace de la imagen"
                        required
                        valor={imagen}
                        actualizarValor={actualizarImagen}
                    />

                    <CampoTexto
                        titulo="Video"
                        placeholder="Ingrese el enlace del video"
                        required
                        valor={video}
                        actualizarValor={actualizarVideo}
                    />

                    <CampoTexto
                        titulo="Descripción"
                        placeholder="¿De qué se trata este vídeo?"
                        required
                        valor={descripcion}
                        actualizarValor={actualizarDescripción}
                    />

                    <Boton />
                </div>
            </form>
        </div>
    );
};

export default Modal;
