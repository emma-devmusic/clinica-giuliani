import { useEffect, useState } from 'react';

type TeamTypes = { totalDoctors: number }

export const Team = ( {totalDoctors}:TeamTypes ) => {

    const [arrayDoctors, setArray] = useState<number[]>([])
    useEffect(() => {
        let array = []
        for (let i = 1; i <= totalDoctors; i++) {
            array.push(i)
        }
        setArray(array)
    }, [])
    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <p className="d-inline-block border rounded-pill py-1 px-4">Doctores</p>
                    <h1>Médicos Especialistas</h1>
                </div>
                <div className="row g-4">
                    {
                        arrayDoctors.map( (doc,i) => 

                            <div className="col-lg-3 col-md-6 wow fadeInUp" key={i} data-wow-delay="0.1s">
                                <div className="team-item position-relative rounded overflow-hidden">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src={`img/team-${doc}.jpg`} alt=""/>
                                    </div>
                                    <div className="team-text bg-light text-center p-4">
                                        <h5>Nombre</h5>
                                        <p className="text-primary">Área</p>
                                        <div className="team-social text-center">
                                            <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}
