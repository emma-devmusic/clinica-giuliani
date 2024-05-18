import { useForm } from "../../hooks/useForm"
import { dataDoctors } from "../team/dataDoctors"


const initialValues = {
    name: '',
    email: '',
    phone: '',
    doctor: '',
}

export const ContactForm = () => {

    const [ values, handleInputChange, reset ] = useForm(initialValues)

    const handleSend = ( e:React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault()
        console.log(values)
        reset()
    }

    return (
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="bg-light rounded h-100 d-flex  p-5">
                <form>
                    <div className="row g-3">
                        <div className="col-12">
                            <h3>Formulario</h3>
                        </div>
                        <div className="col-12">
                            <input 
                                type="text" 
                                className="form-control border-0" 
                                placeholder="Nombre" 
                                style={{ height: "55px" }} 
                                name="name"
                                value={values.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-12">
                            <input 
                                type="email" 
                                className="form-control border-0" 
                                placeholder="Correo" 
                                style={{ height: "55px" }} 
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-12">
                            <input 
                                type="text" 
                                className="form-control border-0" 
                                placeholder="Teléfono" 
                                style={{ height: "55px" }} 
                                name="phone"
                                value={values.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-12">
                            <select className="form-select border-0" name="doctor" onChange={handleInputChange} defaultValue={'0'} style={{ height: "55px" }}>
                                {
                                    dataDoctors.map( doc => (
                                        <option key={doc.id} value={`${doc.firstName} ${doc.lastName}`}>{ `${doc.firstName} ${doc.lastName}` }</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="col-12">
                            <button 
                                className="btn btn-primary w-100 py-3" 
                                onClick={handleSend}
                            >Consultar Disponibilidad</button>
                        </div>
                        <div className="col-12">
                            <a href="https://wa.me/543731455614" target="_blank">whatsappeame</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
