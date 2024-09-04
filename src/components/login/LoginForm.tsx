
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { IconLogin } from './IconLogin'

export const LoginForm = () => {


    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = () => {
        console.log(values)
    }



    return (
        <div className="container bg-light d-flex align-items-center justify-content-center shadow" style={{
            maxWidth: '500px',
            height: 'calc(100vh - 75px)',
            width: '100%'
        }}>
            <main className="form-signin w-100">
                <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <div className='text-center'>
                        <IconLogin />
                    </div>
                    <h1 className="h4 mb-3 text-center fw-light">Recibos de <strong>Sueldos</strong></h1>

                    <div className="form-floating">
                        <input value={values.email} onChange={handleInputChange} name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Correo Electrónico</label>
                    </div>
                    <div className="form-floating">
                        <input value={values.password} onChange={handleInputChange} name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Recordarme
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                    <p className="mt-5 mb-3 text-muted text-center" style={{ fontSize: '.9rem' }}>Powered by <Link className="" to={'https://ding.com.ar'}><i>Ding</i></Link></p>
                    {/* <p className="mt-5 mb-3 text-muted text-center fw-lighter"></p> */}
                </form>
            </main>
        </div>
    )
}
