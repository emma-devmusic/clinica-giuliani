import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ArrowIcon } from "../icons";
import { QueryObject } from "../../types";
import './styles.css'

interface Props {
    setQueryObject: Dispatch<SetStateAction<QueryObject>>;
    queryObject: QueryObject;
    action: any;
    pagination: any
}

export const Pagination = ({setQueryObject, queryObject, action, pagination}: Props) => {

    const dispatch = useAppDispatch()

    const handlePageChange = (page: number) => {
        if(page > pagination.total_pages || page === 0) return
        dispatch(action({term: queryObject.term, page: page}))
    };

    return (
        <div className="d-flex align-items-center justify-content-between gap-3 pagination">
            <div className="d-flex align-items-center gap-3">
                <div>Página: </div>
                <ArrowIcon className="fs-3" style={{ transform: 'rotate(180deg)' }} onClick={() => handlePageChange(pagination.page - 1)}/>
                <div>{pagination.page}</div>
                <ArrowIcon className="fs-3" onClick={() => handlePageChange(pagination.page + 1)}/>
                <div>de</div>
                <div className="text-primary">{pagination.total_pages}</div>
            </div>
            <div className="d-flex align-items-center gap-3">
                <div className="text-end">Cantidad de Elementos: </div>
                <div className="text-primary">{pagination.total_items}</div>
            </div>
        </div>
    );
};
