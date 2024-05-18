import { Link } from "react-router-dom";

interface Props {
    icon: JSX.Element;
    name: string;
    link: string;
    specialist: string[];
}

export const Service = ({icon, name, link, specialist}: Props) => {

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex align-items-center gap-2">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
                            {
                                icon
                            }
                        </div>
                        <h4 className="mb-3">{ name }</h4>
                    </div>
                    <p className="m-0"><strong>Especialistas:</strong></p>
                    {
                        specialist.map( (specialist, i) => <p key={i} className="m-0">{specialist}</p> )
                    }
                </div>
                <Link className="btn mt-4" to={`/services/${link}`}><i className="fa fa-plus text-primary me-3"></i>Más Info</Link>
            </div>
        </div>
    )
}
