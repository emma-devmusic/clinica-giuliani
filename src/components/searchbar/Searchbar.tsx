import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { SearchIcon } from "../icons";
import { QueryObject } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useLocation } from "react-router-dom";
import './styles.css'

interface Props {
    setQueryObject: Dispatch<SetStateAction<QueryObject>>
    queryObject: QueryObject,
    action: any
}



export const Searchbar = ({ queryObject, action }: Props) => {

    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const { userActive } = useAppSelector(state => state.users)
    const [selectByCreatedDate, setSelectByCreatedDate] = useState(false)
    const [values, setValues] = useState({ term: '' })
    const [inputValues, setInputValues] = useState({
        start_date: '',
        end_date: '',
        period: '',
        asset_type: ''
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputValues(state => {
            return { ...state, [e.target.name]: e.target.value }
        })
    }

    useEffect(() => {
        const params = new URLSearchParams();
        Object.entries(inputValues).forEach(([key, value]) => {
            if (value) {
                if (key === 'period') {
                    params.append(key, `${value}-01`)
                } else {
                    params.append(key, `${value}`)
                }
            }
        })
        queryObject.term = params.toString()
        if (pathname.includes('assets') && !pathname.includes('select-user') || pathname.includes('admin-users/')) {
            const payload = { query: queryObject, id: userActive.id }
            dispatch(action(payload))
        }
    }, [inputValues])


    useEffect(() => {
        setInputValues(state => {
            return { ...state, start_date: '', end_date: '' }
        })
    }, [selectByCreatedDate])

    const handleSearch = (e: any) => {
        e.preventDefault()
        dispatch(action({ page: queryObject.page, term: values.term }))
    }

    return (
        <div className="search-bar" style={{ flexBasis: '80%' }}>
            <form style={{
                maxWidth: '600px',
            }} onSubmit={handleSearch}>

                {
                    pathname.includes('assets') && !pathname.includes('select-user') || pathname.includes('admin-users/')
                        ?
                        <>
                            <div className="d-md-flex gap-3 ">
                                <div className="form-floating w-100">
                                    <input
                                        type="month"
                                        id='period'
                                        name="period"
                                        className="form-control"
                                        required
                                        value={inputValues.period}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="period">Periodo</label>
                                </div>
                                <div className="form-floating w-100 mt-2 mt-md-0 ">
                                    <select
                                        className="form-select"
                                        id="asset_type"
                                        name="asset_type"
                                        required
                                        onChange={handleInputChange}
                                    >
                                        <option value="">Todos</option>
                                        <option value="Sueldo">Sueldo</option>
                                        <option value="Aguinaldo">Aguinaldo</option>
                                        <option value="Complementaria">Complementaria</option>
                                        <option value="Adicional Sanidad">Adicional Sanidad</option>
                                    </select>
                                    <label htmlFor="asset_type">Tipo de Haber</label>
                                </div>
                            </div>
                            <div className="form-check  mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={selectByCreatedDate} onChange={(e) => setSelectByCreatedDate(e.target.checked)} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Filtrar por fechas de cargas
                                </label>
                            </div>
                            {
                                selectByCreatedDate &&
                                <div className="d-md-flex gap-3 mt-3">
                                    <div className="form-floating w-100">
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="start_date"
                                            placeholder="DD/MM/YYYY"
                                            value={inputValues.start_date}
                                            onChange={handleInputChange}
                                            name="start_date"
                                        />
                                        <label htmlFor="start_date">Desde</label>
                                    </div>
                                    <div className="form-floating w-100 mt-2 mt-md-0">
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="end_date"
                                            placeholder="DD/MM/YYYY"
                                            value={inputValues.end_date}
                                            onChange={handleInputChange}
                                            name="end_date"
                                        />
                                        <label htmlFor="end_date">Hasta</label>
                                    </div>
                                    {/* <div className="d-flex  mt-3 mt-md-0">
                                    <button type="submit" className="btn btn-primary">Buscar</button>
                                </div> */}
                                </div>
                            }
                        </>

                        :
                        <div className="search-bar__input">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar..."
                                value={values.term}
                                onChange={(e) => setValues({ term: e.target.value })}
                            />
                            <button type="submit" className="btn btn-primary"><SearchIcon /></button>
                        </div>
                }
            </form>

        </div>
    );
};
