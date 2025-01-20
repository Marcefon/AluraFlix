import "./Boton.css";

const Boton = ({ limpiarCampos }) => {
    return (
        <div className="botones">
            <button type="submit" className="boton">GUARDAR</button>
            <button
                type="button"
                className="boton"
                onClick={limpiarCampos} // Ejecuta la función de limpieza
            >
                LIMPIAR
            </button>
        </div>
    );
};

export default Boton;
