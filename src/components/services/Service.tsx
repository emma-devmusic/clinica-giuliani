import { Link } from "react-router-dom";

interface Props {
    icon: JSX.Element;
    name: string;
    link: string;
}

export const Service = ({icon, name, link}: Props) => {

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h- d-flex flex-column align-items-center 100 p-5">
                <div className="d-flex align-items-center gap-2 justify-content-center">
                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
                        {
                            icon
                        }
                    </div>
                    <h4 className="mb-3">{ name }</h4>
                </div>
                <Link className="btn" to={`services/#${link}`}><i className="fa fa-plus text-primary me-3"></i>Más Info</Link>
            </div>
        </div>
    )
}
