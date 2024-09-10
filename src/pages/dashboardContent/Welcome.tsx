import dashImg from '../../assets/img/dash-img.png'
import './styles/welcome.css'

export const Welcome = () => {


    return (
        <div className="welcome-dashboard h-100">
            <div className='welcome-dashboard__content'>
                <div className='dash-img'>
                    <img src={dashImg} alt=""  style={{
                        width: '110px',
                        height: '110px',
                    }}/>
                </div>
                <div className="welcome-message">
                    <h5>Administrador de Recibos de Sueldo de la <strong className='text-primary'>Clinica Giuliani</strong></h5>
                </div>
            </div>
        </div>
    );
};
