import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { newUser, updateUser } from "../../../../store/slices/usersSlice";
import { NewUserInputsForm } from "../../../../types";
import Swal from "sweetalert2";





export const NewUserModal = () => {

    const { modal: { content } } = useAppSelector(state => state.ui)
    const { userActive } = useAppSelector(state => state.users)
    const { register, handleSubmit, watch, reset } = useForm<NewUserInputsForm>()
    const [password2, setPassword2] = useState('')
    const [changePassword, setChangePassword] = useState(false)
    const dispatch = useAppDispatch()

    const submitDataUser = (data: any) => {
        if(content === 'update_user'){
            if (!changePassword) delete data.password;
            dispatch(updateUser({ id: userActive.id, data }))
            return
        }
        dispatch(newUser(data))
    }

    const onSubmit: SubmitHandler<NewUserInputsForm> = (data) => {

        (watch('password') === password2)
            ? submitDataUser(data)
            : Swal.fire('Error', 'Las contraseñas no coinciden', 'warning')
        document.getElementById('close-modal-ding')?.click()
    }

    useEffect(() => {
        const userUpdating = {
            name: userActive.name,
            lastname: userActive.lastname,
            dni: parseInt(userActive.dni),
            phone: parseInt(userActive.phone),
            email: userActive.email,
            password: ''
        }
        if (content === 'update_user') {
            reset(userUpdating)
        }
    }, [])

    return (
        <>
            <div className="onboarding-gray mt-3 ms-3 me-3">
                Completa el formulario cuidadosamente para {content === 'update_user' ? 'modificar el' : 'dar de alta un nuevo'} usuario. Ten en cuenta que no pueden existir 2 usuarios con el mismo teléfono, email o DNI.
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="modal-body">
                    <div className="d-flex gap-2">
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" placeholder="h" id="name" required {...register('name', { required: content === 'new_user' })} />
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" placeholder="h" id="lastname" required {...register('lastname', { required: content === 'new_user' })} />
                            <label htmlFor="lastname">Apellido</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="h" id="dni" required {...register('dni', { required: content === 'new_user' })} />
                        <label htmlFor="dni">Documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="h" id="email" required {...register('email', { required: content === 'new_user' })} />
                        <label htmlFor="email">Correo Electrónico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="h" id="phone" required {...register('phone', { required: content === 'new_user' })} />
                        <label htmlFor="phone">Teléfono</label>
                    </div>
                    {
                        content === 'new_user' &&
                        <div className="form-floating mb-3">
                            <select className="form-select" id="role" required {...register('role', { required: true })}>
                                <option value="">-</option>
                                <option value="ADMIN">Administrador</option>
                                <option value="EMPLOYEE">Empleado</option>
                            </select>
                            <label htmlFor="role">Seleccione un Rol</label>
                        </div>
                    }

                    {
                        content === 'update_user' &&
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={changePassword} onChange={(e) => setChangePassword(e.target.checked)} />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Cambiar Contraseña
                            </label>
                        </div>
                    }
                    {
                        (content === 'new_user' || changePassword) &&
                        <>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" placeholder="h" id="password" required {...register('password', { required: content === 'new_user' })} />
                                <label htmlFor="password">Contraseña</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" placeholder="h" id="password2" required value={password2} onChange={(e) => setPassword2(e.target.value)} />
                                <label htmlFor="password2">Repetir Contraseña</label>
                            </div>
                        </>
                    }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="close-modal-ding">Close</button>
                    <button type="submit" className="btn btn-primary" >Guardar</button>
                </div>
            </form>
        </>
    );
};
