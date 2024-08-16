import { useParams } from "react-router-dom"
import { PageHeader } from "../components"
import { dataServices } from "../components/services/data"
import { Service } from "../types"
import { Profile } from "../components/team"
import { dataDoctors } from "../components/team/dataDoctors"



export const ServicePage = () => {

    const params = useParams()

    const { icon, specialist, link, name, paragraph, section } = dataServices.find(e => e.link === params.idService) as Service


    return (
        <div>
            <PageHeader title="Servicios" />
            <div className="container-xxl">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                        <h1 className="mb-0">{name}</h1>
                        <div className="d-inline-flex align-items-center justify-content-center bg-light rounded-circle" style={{ width: "65px", height: "65px" }}>
                            {icon}
                        </div>
                    </div>
                    <hr className="m-5" />
                    <div className="row align-items-center">
                        <div className="col-lg-6 fs-4 text-lg-end">
                            {paragraph}
                        </div>
                        <div className="col-lg-6">
                            <img src={`/img/services/${link}.jpg`} alt="Imagen del servicio" className="img-fluid rounded shadow-sm align-self-end" style={{
                                height: '300px',
                                width: '800px',
                                objectFit: 'cover'
                            }} />
                        </div>
                    </div>

                    <hr className="m-5" />

                    {section}

                    <hr className="m-5" />

                    <h3>Atención Integral</h3>
                    <p>En la Clínica Giuliani, entendemos que cada paciente es único. Por ello, ofrecemos un enfoque integral que incluye:</p>
                    <ul>
                        <li className="m-3"><strong>Evaluación Preoperatoria:</strong> Exámenes y consultas para evaluar el estado general del paciente y planificar la cirugía.</li>
                        <li className="m-3"><strong>Asesoramiento Personalizado:</strong> Información detallada sobre el procedimiento, opciones de tratamiento y cuidados postoperatorios.</li>
                        <li className="m-3"><strong>Cuidados Postoperatorios:</strong>  Seguimiento continuo para asegurar una recuperación óptima y manejar cualquier complicación.</li>
                    </ul>

                    <div className="col-lg-4 col-md-6 wow fadeInUp mt-5" data-wow-delay="0.1s">
                        <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column justify-content-between">
                            <div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
                                        {
                                            icon
                                        }
                                    </div>
                                    <h4 className="mb-3">{name}</h4>
                                </div>
                                <p className="m-0"><strong>Especialistas:</strong></p>
                                {
                                    specialist.map((specialist, i) => <p key={i} className="m-0">{specialist}</p>)
                                }
                            </div>
                        </div>
                    </div>

                    <hr className="m-5" />
                    {
                        params.idService === 'radiografias'
                            ? <></>
                            : <>
                                <h3 className="mb-5">
                                    {
                                        `${(params.idService === 'radiografias' || params.idService === 'tomografias')
                                            ? 'Equipo Técnico'
                                            : 'Equipo Médico'}`
                                    }
                                </h3>
                                <div className="row g-4">
                                    {
                                        dataDoctors.map((doctor, i) => {
                                            const dr = `${doctor.lastName}, ${doctor.firstName}`;

                                            if (specialist.includes(dr))
                                                return <Profile
                                                    docName={doctor.firstName + ' ' + doctor.lastName}
                                                    area={doctor.area}
                                                    docImage={doctor.docImage || 'por-defecto'}
                                                    key={i}
                                                    id={i}
                                                />
                                        })
                                    }
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}
