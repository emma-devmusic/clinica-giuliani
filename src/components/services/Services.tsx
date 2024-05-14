import { useState } from "react"
import './services.css';
import { dataServices } from "./data";
import { Service } from "./Service";



export const Services = () => {

    const [ numServices, setNumServices ] = useState<number>(6);

    const handleShowServices = () => {
        setNumServices( state => state !== 6 ? 6 : 12 )
    }

    return (
        <div className="container-xxl py-5" id="services-section">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <p className="d-inline-block border rounded-pill py-1 px-4">Servicios</p>
                    <h1>Soluciones de Atención Médica</h1>
                </div>
                <div className="row g-4">
                {
                    dataServices.map( (service, i) => i < numServices && (
                        <Service
                            {...service}
                            key={i}
                        />
                    ) )
                }
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                        onClick={handleShowServices}
                    >
                        { numServices === 6 ? 'Ver Más': 'Ver Menos'}
                    </button>
                </div>
            </div>
        </div>
    )
}



// export const Services = () => {

//     const [showServices, setShowServices] = useState<boolean>(false);
//     const handleShowServices = (e: React.MouseEvent) => {

//     }

//     return (
//         <div className="container-xxl py-5" id="services-section">
//             <div className="container">
//                 <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
//                     <p className="d-inline-block border rounded-pill py-1 px-4">Servicios</p>
//                     <h1>Soluciones de Atención Médica</h1>
//                 </div>
//                 <div className="row g-4">
//                     <div className="row g-4 mt-0">
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//                             <div className="service-item bg-light rounded h- d-flex flex-column align-items-center 100 p-5">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <i className="fa fa-heartbeat text-primary fs-4"></i>
//                                     </div>
//                                     <h4 className="mb-3">Cardiología</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//                             <div className="service-item bg-light rounded h- d-flex flex-column align-items-center 100 p-5">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <i className="fa fa-heartbeat text-primary fs-4"></i>
//                                     </div>
//                                     <h4 className="mb-3">Cardio Infantil</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <i className="fa fa-heart text-primary fs-4"></i>
//                                     </div>
//                                     <h4 className="mb-3">Pediatría</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <i className="fa fa-brain text-primary fs-4"></i>
//                                     </div>
//                                     <h4 className="mb-3">Neurólogía</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//                             <div className="service-item bg-light rounded h-1 d-flex flex-column align-items-center 00 p-5">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <svg className="fs-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="m38.815 6l-9.126 9.126l2.622 1.748l4.482-4.481a1 1 0 0 1 1.414 1.414l-5.5 5.5l-.007-.007l-2.114 2.114A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30H12l15.7-15.7l-.007-.007L35.986 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM16.828 28h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69l-2.606-1.736zM20 34H10v2h10zm8 0v2h4v-2zm-6 0h4v2h-4zm16 0h-4v2h4zM26.707 22.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414z" clipRule="evenodd"></path></svg>
//                                     </div>
//                                     <h4 className="mb-3">Cirugía</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <svg className="fs-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path className="text-primary" fill="currentColor" d="M18.852 5.148a3.317 3.317 0 0 0-.96-2.183a3.333 3.333 0 1 0-4.713 4.714l-5.499 5.5a3.333 3.333 0 1 0-4.714 4.713c.606.606 1.39.918 2.183.96c.042.793.354 1.576.96 2.183a3.333 3.333 0 1 0 4.713-4.714l5.499-5.499a3.333 3.333 0 1 0 4.714-4.713a3.313 3.313 0 0 0-2.183-.961"></path></svg>
//                                     </div>
//                                     <h4 className="mb-3">Traumatología</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row g-4 mt-0">
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <i className="fa fa-user-md text-primary fs-4"></i>
//                                     </div>
//                                     <h4 className="mb-3">Clínica Médica</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <svg className="fs-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={4}><path strokeLinejoin="round" d="M23 5c-1.146 4.46-1.146 7.773 0 9.938c1.719 3.247 5.7 5.042.574 9.373c-5.126 4.332-10.323.697-13.532.697c-3.208 0-6.02 3.613-6.02 8.992c0 3.586.66 6.586 1.978 9"></path><path strokeLinejoin="round" d="M29.984 5c-1.441 5.329-1.113 8.709.985 10.14c3.148 2.145 3.389-2.336 9.172.33c5.783 2.666 4.28 11.961.953 16.746C37.768 37 30.668 41.835 24.008 41c-6.659-.835-9.135-8.98-9.992-8.98c-.857 0-2.668.025-3.022 3.397c-.236 2.248.435 4.776 2.01 7.583"></path><path d="M35.645 28.29c-.578 1.712-1.555 3.048-2.93 4.01c-1.375.962-3.12 1.528-5.237 1.7"></path></g></svg>
//                                     </div>
//                                     <h4 className="mb-3">Gastroenerología</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <i className="fa fa-vials text-primary fs-4"></i>
//                                     </div>
//                                     <h4 className="mb-3">Laboratorio</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <svg className="fs-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 16C159 16 80 95 80 192v206.57a97.6 97.6 0 0 0 28 68.49A94.5 94.5 0 0 0 176 496c36.86 0 67.18-15.62 90.12-46.42c4.48-6 9.55-14.74 15.42-24.85c15.32-26.37 36.29-62.47 63.17-80.74c25.77-17.51 47.23-39.54 62-63.72C423.51 252.94 432 223.24 432 192c0-97-78.95-176-176-176m96 184a16 16 0 0 1-16-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.42c27.19-7.84 58.4-6.72 64.28-6.42a48 48 0 0 1 38.6 75.9c-.3.41-.61.81-.95 1.2c-16.55 19-36 45.48-38.46 55a16 16 0 0 1-30.94-8.14c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 0 0 239.82 240h-.88c-16.6-.89-45.89.8-62.94 8.31V304a16 16 0 0 1-32 0V184c0-57.35 50.24-104 112-104s112 46.65 112 104a16 16 0 0 1-16 16"></path></svg>
//                                     </div>
//                                     <h4 className="mb-3">Otorrinolaringología</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <svg className="fs-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22.5q-.375 0-.7-.175t-.525-.475q-3.025-.55-5.337-2.7T9.2 13.85q-2.15 1-3.512 2.9T4.05 20.975q-.05.425-.337.725T3 22t-.712-.312t-.238-.738q.275-3.025 2.075-5.462T8.75 11.85q-.525-2.875-.088-5.187T10.5 2.925q.05-.6.475-1.012T12 1.5q.625 0 1.063.438T13.5 3t-.437 1.063T12 4.5h-.1q-.05 0-.125-.025q-.55.625-.875 1.538t-.425 2.037q.5-.5 1.163-.862t1.462-.563q.75-.2 1.613-.262t1.812.012q.2-.2.45-.288T17.5 6q.625 0 1.063.438T19 7.5t-.437 1.063T17.5 9q-.35 0-.687-.162t-.538-.463q-.825-.05-1.587.013t-1.363.262q-.975.325-1.537.95t-.713 1.6q.7-.125 1.188-.162T14.4 11q.2-.25.488-.375t.612-.125q.625 0 1.063.438T17 12t-.437 1.063t-1.063.437q-.325 0-.612-.125T14.4 13q-1.575 0-2.075.038T11.2 13.2q.325.85 1.275 1.3t2.475.5q.725.05 1.563-.025t1.687-.225q.2-.35.55-.55t.75-.2q.625 0 1.063.438T21 15.5t-.437 1.063T19.5 17q-.25 0-.462-.075t-.413-.225q-.85.15-1.662.238t-1.538.087t-1.375-.075t-1.225-.225q.95 1.225 2.313 2.063T18 19.9q.2-.2.463-.3t.537-.1q.625 0 1.063.438T20.5 21t-.437 1.063T19 22.5"></path></svg>
//                                     </div>
//                                     <h4 className="mb-3">Alergista</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center ">
//                                 <div className="d-flex align-items-center gap-2 justify-content-center">
//                                     <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: "65px", height: "65px" }}>
//                                         <svg className="fs-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.48 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.214-1.988c.476-.052.637-.187.76-.342c.197-.247.343-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875"></path><path d="m18 26.5l.5 2l1.5 3V37l3.5 3l4.5-2.5v-6l2-3v-2L24 25zm7 5.5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></path><path d="M19 23.064v1.807l.149-.057C20.253 24.399 21.872 24 24 24s3.747.4 4.851.814l.149.057v-1.807a8 8 0 0 0-.851-.378C27.253 22.351 25.872 22 24 22s-3.253.35-4.149.686a8 8 0 0 0-.851.378m10.406.24h-.001zM30 22.5l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 0 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.002-.001l.001-.002l.005-.003l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58C20.253 20.399 21.872 20 24 20s3.747.4 4.851.814a9 9 0 0 1 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-11.406 4.804h.001l.002-.002h.002m-.005.002l.005-.003l.043-.03a4 4 0 0 1 .37-.213a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 1 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395a6 6 0 0 1 .37.214l.048.032h-.001l-.002-.002H29.4s0-.002.382-.513L30 26.5m-1.012.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372M18.01 16.993a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601"></path><path d="M18.642 12.066A14 14 0 0 1 33.9 15.1a1 1 0 0 1-1.415 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1c1.3-1.3 2.844-2.33 4.542-3.034"></path></g></svg>
//                                     </div>
//                                     <h4 className="mb-3">Ecografías</h4>
//                                 </div>
//                                 <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Más Info</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="d-flex justify-content-center">
//                     <button
//                         className="btn btn-primary rounded-pill py-3 px-5 mt-3"
//                         onClick={handleShowServices}
//                     >
//                         Ver más
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }



