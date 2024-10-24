
import './appointment.css'

export const Appointment = () => {

    return (
        <div className="container-xl py-5" id='appointment'>
            <div className="container">
                <div className="">
                    <div className="row  g-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="col-lg-6">
                            <div className="mb-3">
                                <p className="d-inline-block border rounded-pill py-1 px-4 w-auto">Turnos</p>
                                <h1 className="mb-4">Contáctanos Para Agendar Un Turno.</h1>
                                <p className="mb-4 col-md-9">Comunícate con nosotros hoy mismo para reservar tu turno. Estamos aquí para brindarte la atención médica que necesitas, con el cuidado y la experiencia que mereces.</p>
                            </div>
                            <div className="mb-3">
                                <div className="card-contact bg-light rounded d-flex align-items-center p-5 ">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "65px", height: "65px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fs-4 text-primary" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path></svg>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Para agendar un turno</p>
                                        <h5 className="mb-0">+54 9 3731 44-3485</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="card-contact bg-light rounded d-flex align-items-center p-5">
                                    <div className="box-icon d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: "65px", height: "65px" }}>
                                        <i className="fa fa-envelope-open text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Para Ecografías, Radiografías o Tomografías</p>
                                        <h5 className="mb-0">+54 9 3731 41-1724</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100" style={{ minHeight: "400px" }}>
                                <iframe
                                    className="rounded w-100 h-100" 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.066767188476!2d-61.189979289904244!3d-27.217053481943996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94475ba1b0a168c7%3A0xf9ce1e0e0e42701e!2s25%20de%20Mayo%20541%2C%20Charata%2C%20Chaco!5e0!3m2!1ses-419!2sar!4v1715735569188!5m2!1ses-419!2sar" 
                                    allowFullScreen 
                                    tabIndex={0} 
                                    aria-hidden="false"></iframe>
                            </div>
                        </div>
                    </div>
                    {/* <ContactForm /> */}
                </div>
            </div>
        </div>
    )
}
