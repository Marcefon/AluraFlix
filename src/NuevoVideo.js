import React from "react";
import FormularioVideo from "./componentes/FormularioVideo/FormularioVideo";
import "./NuevoVideo.css";

const NuevoVideo = ({ registrarVideo }) => {
    return (
        <div className="nuevoVideo">
            <h2>NUEVO VIDEO</h2>
            <p>Complete el formulario para crear una nueva tarjeta de video</p>
            <FormularioVideo nuevoVideo={registrarVideo} />
        </div>
    );
};

export default NuevoVideo;