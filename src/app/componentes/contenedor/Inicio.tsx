import libros from '../../../assets/img/libros.jpg';
//import libros1 from '../../../assets/img/libros1.jpg';
//import libros2 from '../../../assets/img/libros2.jpg';
import libros3 from '../../../assets/img/libros3.jpg';
import presentacion from '../../../assets/img/presntacion.png';
import colera from '../../../assets/img/colera.jpeg';
import rosa from '../../../assets/img/rosa.jpeg';
import Hansel from '../../../assets/img/Hansel.png';

//import { Card } from 'react-bootstrap';
;
export const Inicio = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active "  >
            <img className="d-block w-70 pt-4 d-flex " src={presentacion} alt="slide 1" style={{ display: "block", margin: "auto", height: "700px" }} />
          </div>
          <div className="carousel-item" >
            <img className="d-block w-70 pt-4 d-flex" src={libros3} alt="slide 1" style={{ display: "flex", margin: "auto", height: "700px" }} />
          </div>
          <div className="carousel-item"  >
            <img className="d-block w-70 pt-4 d-flex" src={libros} alt="slide 1" style={{ display: "flex", margin: "auto", height: "700px" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{ color: 'black', }} >
          <span className="fa-solid fa-angles-left" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{ color: 'black' }} >
          <span className="fa-solid fa-angles-right" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="pt-4 d-flex justify-content-center">
      <div className="col-md-8">
      <div className="card-group">
      <div className="card" style={{ width: '18rem;' }}>
        <img src={colera} className="card-img-top img-fluid w-50" alt="..." />
        <div className="card-body">
        <h5 className="card-title">El amor en los tiempos de colera</h5>
          <p className="card-text">**El amor en los tiempos del cólera**, de Gabriel García Márquez, narra la historia de amor entre Florentino Ariza y Fermina Daza, cuya relación se ve interrumpida cuando ella se casa con el médico Juvenal Urbino. Durante más de 50 años, Florentino mantiene vivo su amor, esperando pacientemente el momento en que pueda estar con Fermina. La novela explora el paso del tiempo, las distintas formas del amor, la obsesión y la resiliencia emocional, ambientada en un Caribe nostálgico y lleno de realismo mágico. Al final, tras la muerte de Urbino, Florentino y Fermina emprenden juntos un viaje por el río, demostrando que el amor puede renacer incluso en la vejez..</p>
        </div>
      </div>
      <div className="card" style={{ width: '18rem;' }}>
        <img src={rosa} className="card-img-top img-fluid w-50" alt="..." />
        <div className="card-body">
        <h5 className="card-title">	El nombre de la Rosa</h5>
          <p className="card-text">**El nombre de la rosa**, de Umberto Eco, es una novela de misterio ambientada en una abadía medieval del siglo XIV. El fraile franciscano Guillermo de Baskerville y su joven aprendiz, Adso de Melk, llegan al monasterio para asistir a un debate teológico, pero pronto se ven envueltos en la investigación de una serie de asesinatos. A medida que desentrañan los secretos del lugar, descubren que los crímenes están relacionados con un libro prohibido en la misteriosa biblioteca de la abadía. La obra combina suspenso, filosofía, religión y debates sobre el poder del conocimiento, mientras cuestiona los límites entre la fe y la razón.</p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem;' }}>
        <img src={Hansel} className="card-img-top img-fluid w-50" alt="..." />
        <div className="card-body">
        <h5 className="card-title">Hansel y Gretel</h5>
          <p className="card-text">**Hansel y Gretel** es un cuento clásico recopilado por los hermanos Grimm. Narra la historia de dos hermanos que, abandonados en el bosque por sus padres debido a la pobreza, encuentran una casa hecha de dulces. La dueña, una malvada bruja, los captura con la intención de comérselos. Sin embargo, los niños logran engañarla: Gretel empuja a la bruja al horno y ambos escapan con las riquezas de la casa. Al regresar a casa, se reúnen con su padre, ahora arrepentido, y viven felices. La historia destaca la valentía y la astucia frente a la adversidad.</p>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
};