import { 
    About, Appointment, Feature, Header, Services, Spinner, Team, Testimonials 
} from "../components/"


export const Home = () => {

    return (
        <>
            {/* <Spinner /> */}
            <Header />
            <About />
            <Services />
            <Feature />
            <Team />
            <Appointment />
            <Testimonials />
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>
    )
}
