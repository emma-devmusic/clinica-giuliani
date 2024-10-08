import { Dispatch, SetStateAction, useState } from "react";
import { SearchIcon } from "../icons";
import { QueryObject } from "../../types";
import { useAppDispatch } from "../../store/store";
import './styles.css'

interface Props {
    setQueryObject: Dispatch<SetStateAction<QueryObject>>
    queryObject: QueryObject,
    action: any
}



export const Searchbar = ({ queryObject, setQueryObject, action }: Props) => {

    const dispatch = useAppDispatch()
    const [ values, setValues ] = useState({term: ''})

    const handleSearch = (e:any) => {
        e.preventDefault()
        dispatch(action({page: queryObject.page, term: values.term}))
        // dispatch(getUsers({page: queryObject.page, term: values.term}))
        // console.log({page: queryObject.page, term: values.term})
    }

    return (
        <div className="search-bar" style={{flexBasis: '49%'}}>
            <form className="search-bar__input" style={{
                maxWidth: '600px',
            }} onSubmit={handleSearch}>
                <input
                    type="text" 
                    className="form-control" 
                    placeholder="Buscar..." 
                    value={values.term}
                    onChange={(e) => setValues({term: e.target.value})}
                />
                <button type="submit" className="btn btn-primary"><SearchIcon /></button>
            </form>
            
        </div>
    );
};
