
interface Props {
    docImage: string;
    docName: string;
    area: string;
}


export const Profile = ({docImage, docName, area }: Props) => {
    
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                    <img className="img-fluid" src={`img/team-${2}.jpg`} alt="" />
                </div>
                <div className="team-text bg-light text-center p-4">
                    <h5>{docName}</h5>
                    <p className="text-primary">{area}</p>
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
