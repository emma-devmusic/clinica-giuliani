

export const About = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="d-flex flex-column">
                            <img className="img-fluid rounded w-75 align-self-end" src="img/about-1.jpg" alt=""/>
                            <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="img/about-2.jpg" alt="" style={{ marginTop: "-25%"}}/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <p className="d-inline-block border rounded-pill py-1 px-4">Sobre Nosotros</p>
                        <h1 className="mb-4">¿Por qué confiar en nosotros? ¡Conocé nuestra trayectoria!</h1>
                        <p>En la Clínica Giuliani, tu salud es nuestra pasión. Con un equipo de profesionales médicos altamente calificados y tecnología de vanguardia, estamos comprometidos a proporcionarte la mejor atención posible. Desde el momento en que entras por nuestras puertas, te recibimos con calidez y empatía, asegurándonos de que te sientas seguro y cuidado en todo momento.</p>
                        <p className="mb-4">Ya sea que necesites una consulta de rutina o un tratamiento especializado, estamos aquí para ti, brindándote cuidado médico integral y personalizado. Confía en nosotros para cuidar de ti y de tu familia, porque en la Clínica Giuliani, tu bienestar es nuestra prioridad número uno.</p>
                        <p><i className="far fa-check-circle text-primary me-3"></i>Atención sanitaria de calidad</p>
                        <p><i className="far fa-check-circle text-primary me-3"></i>Doctores Altamente Calificados</p>
                        <p><i className="far fa-check-circle text-primary me-3"></i>Profesionales de la investigación médica</p>
                        {/* <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Más información</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
