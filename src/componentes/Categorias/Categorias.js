import "./Categorias.css";
import Cards from "../Cards";

const Categorias = (props) => {
    const { datos, cambiarMostrar, videos, eliminarCard } = props;

    const obj = {
        backgroundColor: datos.Color,
    };

    const border = {
        borderColor: datos.Color,
        borderStyle: "solid",
    };

    return <>
        {
        
            videos.length > 0 && 
            <div className="categorias">
                <div className="titulos" style={obj}>
                    <h3>{datos.titulo}</h3>
                </div>
                <div className="videos">
                    {videos.map((video, index) => (
                        <Cards
                        datos={video}
                        key={index}
                        cambiarMostrar={cambiarMostrar}
                        style={border}
                        eliminarCard={eliminarCard}
                        />
                    ))}
                </div>
            </div>
        }
    </>
};

export default Categorias;
