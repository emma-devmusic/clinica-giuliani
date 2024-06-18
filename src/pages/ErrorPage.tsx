import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Error 404</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Inicio</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">404 Error</li>
                        </ol>
                    </nav>
                </div>
            </div>
            
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 className="display-1">404</h1>
                            <h1 className="mb-4">No se encuentra la página.</h1>
                            <p className="mb-4">Lo sentimos, ¡la página que has buscado no existe en nuestro sitio web! ¿Quizás quieres ir a nuestra página de inicio?</p>
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to={'/'}>Volver Al Inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
