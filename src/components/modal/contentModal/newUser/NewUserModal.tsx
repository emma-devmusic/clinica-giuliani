import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../store/store";
import { newUser } from "../../../../store/slices/usersSlice";
import { NewUserInputsForm } from "../../../../types";
import Swal from "sweetalert2";





export const NewUserModal = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset} = useForm<NewUserInputsForm>()
    const [password2, setPassword2] = useState('')
    const dispatch = useAppDispatch()


    const onSubmit: SubmitHandler<NewUserInputsForm> = (data) => {
        if(watch('password') === password2) {
            dispatch( newUser(data) )
        } else {
            Swal.fire('Error', 'Las contraseñas no coinciden', 'warning')
        }
        document.getElementById('close-modal-ding')?.click()
    }

    useEffect(() => {
        reset()
    },[])

    return (
        <>
            <div className="onboarding-gray mt-3 ms-3 me-3">
                Completa el formulario cuidadosamente para dar de alta un nuevo usuario. Ten en cuenta que no pueden existir 2 usuarios con el mismo teléfono, email o DNI.
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="modal-body">
                    <div className="d-flex gap-2">
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" placeholder="h" id="name" required {...register('name', {required: true})} />
                            <label htmlFor="name">Nombre</label>
                        </div>
                        <div className="form-floating mb-3 w-100">
                            <input type="text" className="form-control" placeholder="h" id="lastname" required {...register('lastname', {required: true})} />
                            <label htmlFor="lastname">Apellido</label>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="h" id="dni" required {...register('dni', {required: true})} />
                        <label htmlFor="dni">Documento</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="h" id="email" required {...register('email', {required: true})} />
                        <label htmlFor="email">Correo Electrónico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="h" id="phone" required {...register('phone', {required: true})} />
                        <label htmlFor="phone">Teléfono</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id="role" required {...register('role', {required: true})}>
                            <option value="">-</option>
                            <option value="ADMIN">Administrador</option>
                            <option value="EMPLOYEE">Usuario</option>
                        </select>
                        <label htmlFor="role">Seleccione un Rol</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="h" id="password" required {...register('password', {required: true})} />
                        <label htmlFor="password">Contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="h" id="password2" required value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                        <label htmlFor="password2">Repetir Contraseña</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="close-modal-ding">Close</button>
                    <button type="submit" className="btn btn-primary" >Guardar</button>
                </div>
            </form>
        </>
    );
};
