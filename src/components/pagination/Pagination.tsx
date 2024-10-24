import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ArrowIcon } from "../icons";
import { QueryObject } from "../../types";
import './styles.css'

interface Props {
    setQueryObject: Dispatch<SetStateAction<QueryObject>>;
    queryObject: QueryObject;
    action: any;
    pagination: any;
    forAssets?: boolean;
}

export const Pagination = ({ queryObject, action, pagination, forAssets = false }: Props) => {

    const dispatch = useAppDispatch()
    const { assets } = useAppSelector(state => state.assets)
    const { userActive } = useAppSelector(state => state.users)
    const handlePrev = () => handlePageChange(forAssets ? assets.page - 1 : pagination.page - 1)
    const handleNext = () => handlePageChange(forAssets ? assets.page + 1 : pagination.page + 1)

    const handlePageChange = (page: number) => {
        if (forAssets) {
            if (page > assets.total_pages || page === 0) return
            dispatch(
                action({
                    query: { term: queryObject.term, page: page },
                    id: userActive.id
                }))
        } else {
            if (page > pagination.total_pages || page === 0) return
            dispatch(action({ term: queryObject.term, page: page }))
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-between gap-3 pagination">
            <div className="d-flex align-items-center gap-3">
                <div>Página: </div>
                <ArrowIcon className="fs-3" style={{ transform: 'rotate(180deg)' }} onClick={handlePrev} />
                <div>{forAssets ? assets.page : pagination.page}</div>
                <ArrowIcon className="fs-3" onClick={handleNext} />
                <div>de</div>
                <div className="text-primary">{forAssets ? assets.total_pages : pagination.total_pages}</div>
            </div>
            <div className="d-flex align-items-center gap-3">
                <div className="text-end">Cantidad de Elementos: </div>
                <div className="text-primary">{forAssets ? assets.total_items : pagination.total_items}</div>
            </div>
        </div>
    );
};
