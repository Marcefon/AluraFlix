import React, { useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import "./FormularioVideo.css";

const FormularioVideo = ({ nuevoVideo }) => { // Recibir `nuevoVideo` como prop
    // Estados para cada campo
    const [titulo, actualizarTitulo] = useState("");
    const [categoria, actualizarCategoria] = useState("");
    const [imagen, actualizarImagen] = useState("");
    const [video, actualizarVideo] = useState("");
    const [descripcion, actualizarDescripción] = useState("");

    // Manejador para el envío del formulario
    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
        const videoCreado = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion,
        };
        nuevoVideo(videoCreado); 
    };


    // Función para limpiar los campos del formulario
    const limpiarCampos = () => {
        actualizarTitulo("");
        actualizarCategoria("");
        actualizarImagen("");
        actualizarVideo("");
        actualizarDescripción("");
    };


    return (
        <form onSubmit={manejarEnvio} className="formulario-video">
            <h3>Crear Tarjeta</h3>
            <CampoTexto
                titulo="Título"
                placeholder="Ingrese el título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo} 
            />

            <ListaOpciones
                valor={categoria} // Pasamos el estado "categoria"
                actualizarCategoria={actualizarCategoria} 
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

            <Boton limpiarCampos={limpiarCampos}/>
        </form>
    );
};

export default FormularioVideo;
