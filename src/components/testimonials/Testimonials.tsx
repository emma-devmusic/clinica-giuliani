import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

export const Testimonials = () => {
    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <p className="d-inline-block border rounded-pill py-1 px-4">Testimoniales</p>
                    <h1>¡Lo Que Dicen Nuestros Pacientes!</h1>
                </div>
                <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <Slider {...settings}>
                    <div className="testimonial-item text-center">
                        <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style={{width: "100px", height: "100px"}}/>
                        <div className="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 className="mb-1">Nombre del Paciente</h5>
                            <span className="fst-italic">Profesión</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style={{width: "100px", height: "100px"}}/>
                        <div className="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 className="mb-1">Nombre del Paciente</h5>
                            <span className="fst-italic">Profesión</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style={{width: "100px", height: "100px"}}/>
                        <div className="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 className="mb-1">Nombre del Paciente</h5>
                            <span className="fst-italic">Profesión</span>
                        </div>
                    </div>
                </Slider>
                </div>
            </div>
        </div>
    )
}
