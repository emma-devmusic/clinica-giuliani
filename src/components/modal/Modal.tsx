
import { useAppSelector } from "../../store/store";
import { NewAsset } from "./contentModal/newAsset/NewAsset";
import { NewUserModal } from "./contentModal/newUser/NewUserModal";

export const Modal = () => {

    const { modal: { title, content } } = useAppSelector(state => state.ui)

    return (
        <>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {
                            content === 'new_user' && <NewUserModal />
                        }
                        {
                            content === 'update_user' && <NewUserModal />
                        }
                        {
                            content === 'new_asset' && <NewAsset />
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
