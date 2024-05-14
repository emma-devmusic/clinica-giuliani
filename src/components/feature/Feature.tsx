
export const Feature = () => {

    return (
        <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
            <div className="container feature px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="p-lg-5 ps-lg-0">
                            <p className="d-inline-block border rounded-pill text-light py-1 px-4">Experiencia</p>
                            <h1 className="text-white mb-4">¿Por qué nosotros?</h1>
                            <p className="text-white mb-4 pb-2">Con 60 años de experiencia, Clínica Giuliani ofrece atención médica de confianza y calidad. Tu salud en manos expertas desde hace décadas.</p>
                            <div className="row g-4">
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: "55px", height: "55px"}}>
                                            <i className="fa fa-user-md text-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="text-white mb-2">Experiencia</p>
                                            <h5 className="text-white mb-0">Doctores</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: "55px", height: "55px"}}>
                                            <i className="fa fa-check text-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="text-white mb-2">Calidad</p>
                                            <h5 className="text-white mb-0">Servicios</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: "55px", height: "55px"}}>
                                            <i className="fa fa-comment-medical text-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="text-white mb-2">Disposición</p>
                                            <h5 className="text-white mb-0">Consultas</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width: "55px", height: "55px"}}>
                                            <i className="fa fa-headphones text-primary"></i>
                                        </div>
                                        <div className="ms-4">
                                            <p className="text-white mb-2">24 horas</p>
                                            <h5 className="text-white mb-0">Atención</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: "400px"}}>
                        <div className="position-relative h-100">
                            <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{objectFit: "cover"}} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
