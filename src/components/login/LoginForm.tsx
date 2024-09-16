
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { IconLogin } from './IconLogin'
import { useAppDispatch } from '../../store/store'
import { setUser } from '../../store/slices/authSlice'
import { setLoading } from '../../store/slices/uiSlice'
import { AxiosResponse } from 'axios'
import { LoginResponse } from '../../types/response'
import { fetchData } from '../../services/fetchdata'
import Swal from 'sweetalert2'

export const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [values, handleInputChange] = useForm({
        username: '',
        password: ''
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            dispatch(setLoading(true));
            const loginResp: AxiosResponse<LoginResponse> = await fetchData('POST', 'login', values)
            dispatch(setUser({ username: values.username, user_id: loginResp.data.user_id }))
            navigate('/dashboard')
        } catch (error:any) {
            Swal.fire('Error', `${error.response.data.error}`, 'error')
        }
        dispatch(setLoading(false));
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
                        <input value={values.username} onChange={handleInputChange} name='username' type="text" className="form-control" id="floatingInput" placeholder="Usuario123" required />
                        <label htmlFor="username">Correo Electrónico</label>
                    </div>
                    <div className="form-floating">
                        <input value={values.password} onChange={handleInputChange} name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label htmlFor="password">Contraseña</label>
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
