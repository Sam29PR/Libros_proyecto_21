import portada from '../../../assets/img/portada.png'

export const Acerca = () => {
    return (
        <>
            <div className="pt-4 d-flex justify-content-center ">
                
                    <div className="card" style={{ width: '18rem;' }}>
                        <img src={portada} className="card-img-top img-fluid w-50 " alt="..." />
                        <div className="card-body">
                            <p className="card-text fw-bold fs-3">Bienvenido a Blowwind BookStore , un espacio creado por amantes de los libros, para amantes de los libros. Nuestro objetivo es conectar lectores con historias que inspiran, educan y entretienen. Aquí encontrarás reseñas honestas, recomendaciones personalizadas y un rincón para celebrar nuestra pasión por la lectura..</p>
                        </div>
                    </div>
                
            </div>
        </>
    );
};