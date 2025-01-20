import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {v4 as uuid} from "uuid"
import "./App.css";
import Header from "./componentes/Header/Header";
import Banner from "./componentes/Banner/Banner";
import Categorias from "./componentes/Categorias/Categorias";
import Footer from "./componentes/Footer/Footer";
import Modal from "./componentes/Modal-Formulario/Modal";
import NuevoVideo from "./NuevoVideo";

// Lista de categorías
const categorias = [
  {
    id: uuid(),
    titulo: "Front End",
    Color: "#6BD1FF",
  },
  {
    id: uuid(),
    titulo: "Back End",
    Color: "#00C86F",
  },
  {
    id: uuid(),
    titulo: "Innovación y Gestión",
    Color: "#FFBA05",
  },
];

function App() {
  //Eliminar Card
  const eliminarCard = (titulo) => {
    setVideos(videos.filter((video) => video.titulo !== titulo));}



  // Estado para controlar la visibilidad del formulario
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  //Lista de cards
  const [videos, setVideos] = useState([
    {
    titulo: "1",
    categoria: "Front End",
    imagen: "https://s3-alpha-sig.figma.com/img/17ef/6f4a/12b3502a7d7a91f629b08d1082a16d1d?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baYlZvPtOvGy9AfD5AW~e0cJ4--5rEQwWyWqFDIlHvhVwF8JbcbQdKURxGEzlZ6PYD9mQ~8G8fWCHV0POsNqhfG9MFKlb3hWl7Lg0h53JsytJ8pEm9vR28kFqSCwh2s5hdia7~yHGTzZD7PiqIXfF~XuU6L36Nr2VyX93R2WGD7QqRoJUc8qVbE-KyqChdOesBSDdgyQkXiBnf-XY48~KVThBJkyEMixBqH5TNegOfqzQY72SmeSIptj-2pXhIvIyF7PJDm0JLbw6FSCcwN3mKpQJEWHLh2J~rDnLd4zvu~6RRCpcFtSWN4nckX-NOehRFPB515D8z912HsC7yuycA__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "2",
    categoria: "Front End",
    imagen: "https://s3-alpha-sig.figma.com/img/e242/5f5d/888e71def9f20895b46879eb33916fc1?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pjk0kGDxgT5D31gdAFvPc6eVWOtZR4Y2tF1fC~73DwHqGylG6ESEKrsGf7T4xkhbh5Te7xNmjRIYER5nppDdcpBc9nVVuu5MdyA4gI23VJu~cLalNh9uW2Z~XcWjWd1-U9KoEsz~wd4-RKYHLtA-V2KOj2PO0lCUi~bSv6H841ZI3rS9JjU2s-vR8zLBfW92xOywzdcGYVnjtoqgV4PrAUH3qYeH1QEm8zR7k1ltIRMxvSmqTwTAS56sepZDESIbaPAHFCm-uQxEzQJM3V18orRgZ~dgK4bkd1aeLCyuqMWWhJWzrh~ApCnrtTgahcyNSmD-D~Y5UyGXBBuoq4swcg__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "3",
    categoria: "Front End",
    imagen: "https://s3-alpha-sig.figma.com/img/30b7/4d8c/9590129a76e47e70bf82c5f7443ba2e5?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oIN31stV2znWTq4Ypjvi0MzUOMBJk7Aem3fiRGl43a9fX~TGscaIXXqjbGeUbxS1vGicKePEO5OOmaGS-XLUVrxZEwOIP699e~sgKXm5LkZnkV82MK30LgUlg7mx-9ki0df84s6HiPdvoI-8e0sp5o~a-qIgs10Ag6GuEEVxfnxq2sxaqA6x76auc3wDJQLI2Gc46KOBCV51Wv5nOFwQ58SHWclaTKIcVWLUZO9DkB0eXmXYkFgWMfMy-o9JUKOnTCdDrT5vd6QsdqSv5muWY9lBJpgeARcTGBpd4RsIIZYl-a2u8QVYiQ6wLBTgP3RqwOdMXYNt1aVRYxG9v1vvcw__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "4",
    categoria: "Back End",
    imagen: "https://s3-alpha-sig.figma.com/img/5c36/0e4d/e45012ea2655f5bfef23d860d1bf9828?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WQeVqbeXTY8CelULTM5O7wKxSwi7KD-LVYIO582jIyd9XLaMfRi4a8bCkQww2huKQNZcucY2L5UQqBwVj0pOL6udqqxFiu-H0MynyoX8xl5xFOM~my0ZruW0cU4zIZIy9jiKW16jsQza2adU3-34kZmjzzgyKOhWtRJ9wnFYz9tg2g32~9bSoO2szpNKkHTxXE32NUa2iqedKIWXZeC0vS1-2wJW5Y3oyUXA5ABZdsY8FIYHKi~cr1hBVl1WHCYshZeRkc7y5iYr~MIXv6gfQrn~kV6jqbYQO6fDPVQcNZu0fj-JkrZBONfprKMLaKhuLa8HvZQwIeVo49aSYdoZHA__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "5",
    categoria: "Back End",
    imagen: "https://s3-alpha-sig.figma.com/img/803d/6df1/644ac12d062ee849c9554deb430e15b1?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OroeE55yYVvDNg4kWf77zqFckXrf~vBAY2ioMx3arPPgV7H8zdKdm-2dRKuQPFAvr2L7Y5Lp8Dwcktz6KJ4brj9VTxDQKdKaPOYxupFiVkA~mGo~n9OjYpGhXyUlzJtSiI5YKqmT1cVbAjw~u3S9QWZYmXpJ7u1G7nKcy~0irYuSxxIshiJGjIkk0iC5FeDIgkMh-Y-SqRLKfWmx37k22ST87SMtgWpfPN6HGsIOiUqwj896qZAkSdMwdbyzhEAE~SDJNlgaQM7wI-8JCWNZAYN~~jK~Y7BQLMoUzPAGLOCgZoRoLtBKB53YEl6SN0LDSGukdB8fkwJDHA5dhq66Bg__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "6",
    categoria: "Back End",
    imagen: "https://s3-alpha-sig.figma.com/img/bf26/2f6b/8192ae9a1f2d9e83e309b093de28ef61?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n9vQ4s1kSY7beT~GIeSSAY0pshaXXV1TCxK~UIM37a30dsH-QrdPdsLc8hcxdqOxYMw2xkOLXWmX9y7BJ38zpceJb8l0Db2yoyncKjnycV5jPpE7C8jjf13IyqYBtVK1mzuv2DeLa51yl7SW5SgygGKyAJt-MjRCec7ogilKXHse142We~5YdR1cWYZiw6gp7KxutKrtS1Sz1Mn~e2mWGR~3PwPEUqQKHtxqwsmajux~ZhCrI6ovxrukLbo-esYvPQGsV2Bi7eJKixN2n4AHYWdS7Mg~Te92aJ1qidihiONfBlQqU2DghaOHc9xOf4yt75cHS73XOnRJ-vu7Cmas7w__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "7",
    categoria: "Innovación y Gestión",
    imagen: "https://s3-alpha-sig.figma.com/img/6b75/3265/a42a7c49fb0b17eb66b63104fe15c7fc?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UCabzHy9j51ygzPFabqvlu5~Nn6wwNbShOqYj~IXqApBusGkYJJA~9zy3~aQ-rLyhBqXkJrYcDW0MGbdvmuea22F0dCdc5I85b9tPKekGcSbob-dahXplpOGlcNYCAlWtN~FilYZWAID0Tcs6ptIjy5oxOi6ni0DBDAwzxdQ6Das6sEXZtrhJFM6mR8FziQwx7hCiV1RlBZ60b2fB26byXfPVLxeuB~NYKbaobwrYgK31E64zbayN7lR~EVD2Jio0dgq4xlnf-J5e~I3xKm3Ts4DAndSh4HyB-g2NoPlsTcYLELSQcDLT~RMd~wHtfdYoM2t3Fj4KjByn0TS4xpxJQ__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "8",
    categoria: "Innovación y Gestión",
    imagen: "https://s3-alpha-sig.figma.com/img/17db/da7d/3013bfab5941db6070df20b64d03c2e8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=olK7xP~zULRIW6B9Ihz4-sQfMM-XVrKZRrjID~JigMF7BiyMqJDfaTVk4AZxorwz34n89XFY5RmzYAp1-GxMp1a87bZKacAT-ViCem9j-Sa8OSsAwwyNdF5Pt-FW5utjn2sG3omt-g9ece0LhmAbgOkRK~mbK3smxhFbqXKPAli5IwnVH~YVzfbc-DzWrrkCRH9ypRclM4BkaB0axTJx8XQihYFL2IFid-H0obHf-Y4uLMoaXXn2cOl7gYKjMTCLky~ODuqQSNRDmOgz10pA81R5TVE3XNHWzZo85rNumT5cY5Zsw4SNUyNtvlayLZbOybQbZtU43Oj2D8slN8gDQw__",
    video: "",
    descripcion: "LOREM",
    },
    {
    titulo: "9",
    categoria: "Innovación y Gestión",
    imagen: "https://s3-alpha-sig.figma.com/img/2237/ac5d/6ce7a82bd074f782e0d03ce2eae65ade?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XFqUdZppcGgNDxqtf7F6J-N4Pwo2MGHO1IZuKm3Ch30DBlMzz5If9jchp3htx6c4sKudcGbOyrbyyYKqNYG2UqXGy6g4GIGJlDBz-Nrr5EzqY7UM3EYOFr3WaWKSOQupwb8FlFp1bMz5UYz3feVYZRhlNdSWwdnSmb~SkzLqefJbnbTlc~FpDEAD4f7UBTq~VFg-OicbiQdTGj5yF1w0XId0xiB5iuxUmUzrs3BNJ6nCFvOKiqxn3BPvDl-BpAqwrwaoBUir4-uzzrQTbu1-UmuV14uU1MaT9WS0oJTjNqOpKcLVSOsZiIZEzUHRl9Rm~67YyVptzBkctNNUQas-tQ__",
    video: "",
    descripcion: "LOREM",
    },
   


  ]); 

  // Función para alternar la visibilidad del formulario
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // Función para registrar un nuevo video
  const registrarVideo = (video) => {
    console.log("Nuevo video:", video);
    setVideos([...videos, video]); 
  };

  //Eliminar Card
  const deleteCard = () => {
    console.log ("Eliminar colaborador")
    
  }

  return (
    <Router>
      <div className="App">
        {/* Header aparece en todas las páginas */}
        <Header />
        <Routes>
          {/* Ruta principal */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                {mostrarFormulario && (
                  <Modal cambiarMostrar={cambiarMostrar} />
                )}
                {categorias.map((categoria) => (
                  <Categorias
                    datos={categoria}
                    key={categoria.titulo}
                    cambiarMostrar={cambiarMostrar}
                    videos={videos.filter(video => video.categoria === categoria.titulo)}
                    eliminarCard={eliminarCard}
                  />
                ))}
              </>
            }
          />
          {/* Ruta para Nuevo Video */}
          <Route path="/nuevo-video" element={<NuevoVideo 
              registrarVideo={registrarVideo}/>} />
        </Routes>
        {/* Footer aparece en todas las páginas */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
