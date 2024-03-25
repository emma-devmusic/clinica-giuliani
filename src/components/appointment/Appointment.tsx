

export const Appointment = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="d-inline-block border rounded-pill py-1 px-4">Turnos</p>
                        <h1 className="mb-4">Contáctanos Para Agendar Un Turno.</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width: "55px", height: "55px"}}>
                                <i className="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Llamanos Ya Mismo</p>
                                <h5 className="mb-0">+012 345 6789</h5>
                            </div>
                        </div>
                        <div className="bg-light rounded d-flex align-items-center p-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width: "55px", height: "55px"}}>
                                <i className="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div className="ms-4">
                                <p className="mb-2">Escríbenos</p>
                                <h5 className="mb-0">info@example.com</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control border-0" placeholder="Nombre" style={{height: "55px"}}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control border-0" placeholder="Correo" style={{height: "55px"}}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control border-0" placeholder="Teléfono" style={{height: "55px"}}/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select border-0" defaultValue={'0'} style={{height: "55px"}}>
                                            <option value="0">Elige un Doctor</option>
                                            <option value="1">Doctor 1</option>
                                            <option value="2">Doctor 2</option>
                                            <option value="3">Doctor 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control border-0 datetimepicker-input"
                                                placeholder="Seleccionar Fecha" data-target="#date" data-toggle="datetimepicker" style={{height: "55px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="time" id="time" data-target-input="nearest">
                                            <input type="text"
                                                className="form-control border-0 datetimepicker-input"
                                                placeholder="Seleccionar Fecha" data-target="#time" data-toggle="datetimepicker" style={{height: "55px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control border-0" rows={5} placeholder="Describe tu consulta"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Consultar Disponibilidad</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
