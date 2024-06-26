// import { CounterUp } from ".."
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Header.css'
import CountUp from "react-countup"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

export const Header = () => {
    return (
        <div className="container-fluid header bg-primary p-0 mb-5">
            <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
                <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                    <h1 className="display-4 text-white mb-5">Buena Salud es la Raíz de Toda Alegría</h1>
                    <div className="row g-4">
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1">
                                    <CountUp end={28} />
                                </h2>
                                <p className="text-light mb-0">Médicos</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1">
                                    <CountUp end={26} />
                                </h2>
                                <p className="text-light mb-0">Especialistas</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="border-start border-light ps-4">
                                <h2 className="text-white mb-1">
                                    <CountUp end={60} />
                                </h2>
                                <p className="text-light mb-0">Años de Experiencia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="header-carousel">
                    <Slider {...settings}>
                        <div className="carousel-item">
                            <img className="img-fluid w-100" src="img/services/cardio-infantil.jpg" alt=""/>
                            <div className="owl-carousel-text">
                                <h1 className="display-1 text-white mb-0">Cardio Infantil</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid w-100" src="img/services/traumatologia.jpg" alt=""/>
                            <div className="owl-carousel-text">
                                <h1 className="display-1 text-white mb-0">Traumatología</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid w-100" src="img/services/ginecologia.jpg" alt=""/>
                            <div className="owl-carousel-text">
                                <h1 className="display-1 text-white mb-0">Ginecología</h1>
                            </div>
                        </div>
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
