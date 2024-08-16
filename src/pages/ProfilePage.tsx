import { useParams } from "react-router-dom"
import { dataDoctors } from "../components/team/dataDoctors"
import { PageHeader } from "../components"
import { dataServices } from "../components/services/data"
import { Service } from "../components/services/Service"

export const ProfilePage = () => {
    const params = useParams()
    const doctor = dataDoctors[parseInt(params.idProfile || '')]
    const name = doctor.firstName + ' ' + doctor.lastName

    console.log(doctor.docImage)

    return (
        <>
            <PageHeader title="Perfil" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className=" position-relative rounded overflow-hidden">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src={`/img/doctors/${doctor.docImage || 'por-defecto'}.jpg`} alt="Imagen Doctor" />
                            </div>
                            <div className="team-text bg-light text-center p-4">
                                {/* <h5>{name}</h5> */}
                                <p className="text-primary">
                                    {
                                        (Array.isArray(doctor.area))
                                            ? doctor.area.map((text, i) => <span className="text-primary" key={i}> {text}{(i !== doctor.area.length - 1) && ' | '}</span>)
                                            : doctor.area
                                    }
                                </p>
                                <div className="team-social text-center">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9 col-md-6">
                        <div className="p-5">
                            <h1 className="mb-4">Dr. {name}</h1>
                            <hr className="mb-3" />
                            <p>{doctor.description}</p>
                            <ul>
                                <li><strong>Especialidad: </strong><span>{doctor.area}</span></li>
                                <li><strong>Horarios de Atención: </strong><span>{doctor.schedules}</span></li>
                                <li><strong>Modalidad de Atención: </strong><span>{doctor.publicServiceMode}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <p className="d-inline-block border rounded-pill py-1 px-4">Servicios</p>
                </div>
                <div className="row g-4">
                    {
                        dataServices.map((service, i) => {
                            let flag = false
                            doctor.area.forEach( e => {
                                if(e === service.name) flag = true
                            })
                            return flag && <Service {...service} key={i} />
                        })
                    }
                </div>
            </div>

        </>
    )
}