
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { IconLogin } from './IconLogin'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getUserProfile } from '../../store/slices/authSlice'
import { setLoading } from '../../store/slices/uiSlice'
import { fetchData } from '../../services/fetchdata'
import Swal from 'sweetalert2'
import { LoginResponse } from '../../types'
import { AxiosResponse } from 'axios'
import { useEffect } from 'react';

export const LoginForm = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(state => state.auth)
    const { isLoading } = useAppSelector(state => state.ui)
    const [values, handleInputChange] = useForm({
        email: 'correo5@correo.com',
        password: '1234'
    })

    useEffect(() => {
        if (user.name !== '') {
            navigate('/dashboard')
        }
    }, [user])

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            dispatch(setLoading(true));
            const loginResponse: AxiosResponse<LoginResponse> = await fetchData('POST', 'login', values)
            dispatch(getUserProfile(loginResponse.data.role))
        } catch (error: any) {
            Swal.fire('Error', `${error.response.data.error}`, 'error')
            dispatch(setLoading(false));
        }
    }



    return (
        <div className="container bg-light d-flex align-items-center justify-content-center shadow" style={{
            maxWidth: '500px',
            height: 'calc(100vh - 75px)',
            width: '100%'
        }}>
            <main className="form-signin w-100">
                <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    {
                        isLoading
                            ? <div className="m-auto spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            :
                            <>
                                <div className='text-center'>
                                    <IconLogin />
                                </div>
                                <h1 className="h4 mb-3 text-center fw-light">Recibos de <strong>Sueldos</strong></h1>

                                <div className="form-floating">
                                    <input value={values.email} onChange={handleInputChange} name='email' type="text" className="form-control" id="email" placeholder="Usuario123" required />
                                    <label htmlFor="email">Correo Electrónico</label>
                                </div>
                                <div className="form-floating">
                                    <input value={values.password} onChange={handleInputChange} name='password' type="password" className="form-control" id="password" placeholder="Password" required />
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
                            </>
                    }
                </form>
            </main>
        </div>
    )
}
