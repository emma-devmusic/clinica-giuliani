import { useEffect, useState } from 'react';
import { Profile } from './Profile';
import { dataDoctors } from './dataDoctors';

type TeamTypes = { totalDoctors: number }

export const Team = ( {totalDoctors}:TeamTypes ) => {

    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <p className="d-inline-block border rounded-pill py-1 px-4">Doctores</p>
                    <h1>Médicos Especialistas</h1>
                </div>
                <div className="row g-4">
                    {
                        dataDoctors.map( (doc,i) => 
                            (i < totalDoctors) && <Profile 
                                docName={doc.firstName + ' ' + doc.lastName}
                                area={doc.area}
                                docImage={''}
                                key={i}
                            />
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}
