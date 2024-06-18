
import { Profile } from './Profile';
import { dataDoctors } from './dataDoctors';

type TeamTypes = { totalDoctors: number | 'all' }

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
                        dataDoctors.map( (doc,i) => {
                            if(typeof totalDoctors === 'string') {
                                return <Profile 
                                docName={doc.firstName + ' ' + doc.lastName}
                                area={doc.area}
                                docImage={doc.docImage || 'por-defecto'}
                                key={i}
                                id={i}
                            />
                            } else {
                                return (i < totalDoctors) && <Profile 
                                docName={doc.firstName + ' ' + doc.lastName}
                                area={doc.area}
                                docImage={doc.docImage || 'por-defecto'}
                                key={i}
                                id={i}
                            />
                            }
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}
