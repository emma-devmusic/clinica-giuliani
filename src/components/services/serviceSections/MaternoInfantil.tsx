import './serviceStyles.css'

export const MaternoInfantil = () => {
    return (
        <div className="container my-5">
            <section className="mt-5 col-lg-8">
                <h3 className="mb-3">¿Qué es la Sala Materno Infantil?</h3>
                <p className="fs-5 mb-5">
                    La Sala Materno Infantil de la Clínica Giuliani se especializa en el cuidado integral de madres y recién nacidos. Aquí, brindamos atención personalizada desde el prenatal hasta el postparto, asegurando que tanto la madre como el bebé reciban el mejor cuidado posible en un ambiente seguro y acogedor.
                </p>

                <h3>Servicios Ofrecidos</h3>
                <ul>
                    <li>
                        <strong className='me-1'>Consultas Prenatales:</strong>
                        <span>
                            Seguimiento y control del embarazo con ecografías y monitoreos para asegurar la salud de la madre y el feto.
                        </span>
                    </li>
                    <li>
                        <strong className='me-1'>Parto y Nacimiento:</strong>
                        <span>
                            Atención profesional durante el parto con opciones de parto natural y cesárea, en un ambiente preparado para cualquier emergencia.
                        </span>
                    </li>
                    <li>
                        <strong className='me-1'>Cuidados Neonatales:</strong>
                        <span>
                            Atención especializada para recién nacidos, incluyendo cuidado intensivo neonatal para bebés prematuros o con condiciones especiales.
                        </span>
                    </li>
                    <li>
                        <strong className='me-1'>Apoyo Postparto:</strong>
                        <span>
                            Asesoramiento y apoyo en lactancia, cuidados del recién nacido y recuperación postparto para la madre.
                        </span>
                    </li>
                </ul>
            </section>

            <section className="mt-5 col-lg-8">
                <h3 className="mb-3">Nuestras Instalaciones</h3>
                <p className="fs-5 mb-5">
                    Nuestra clínica cuenta con habitaciones privadas y equipadas para la comodidad de la madre y el recién nacido. Disponemos de tecnología avanzada para monitorear la salud de ambos y un equipo médico disponible las 24 horas del día.
                </p>
            </section>

            <section className="mt-5 col-lg-8">
                <h3 className="mb-3">Equipo Médico</h3>
                <p className="fs-5 mb-5">
                    Contamos con un equipo multidisciplinario de obstetras, pediatras, neonatólogos, enfermeras especializadas y otros profesionales de la salud, todos dedicados a proporcionar el mejor cuidado posible a las madres y sus bebés.
                </p>
            </section>
        </div>
    )
}
