import { Link } from "react-router-dom";

interface Props {
    docImage: string;
    docName: string;
    area: string[];
    id: number
}


export const Profile = ({ docImage, docName, area, id }: Props) => {


    console.log(`/img/doctors/${docImage}.jpg`)

    let to = `/profile/${id}`

    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                    <img className="img-fluid" src={`/img/doctors/${docImage}.jpg`} alt={'Imagen del Dr.'} />
                </div>
                <div className="team-text bg-light text-center p-4">
                    <h5>{docName}</h5>

                    <p className="text-primary mb-1">
                        {
                            docName === 'Federico Torgoff' && <strong className="d-block">Director de la Clínica</strong>
                        }
                        {
                            area.map((text, i) => <span className="text-primary" key={i}> {text}{(i !== area.length - 1) && ' - '}</span> )
                        }
                    </p>
                    <div className="team-social text-center">
                        {/* <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a> */}
                        <Link to={to} className="btn btn-square px-4 mb-3">Ver</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
