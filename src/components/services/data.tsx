import { Alergologia, Gastroenterologia, CardioInfantil, Cirugia, ClinicaMedica, Neurologia, Pediatria, Traumatologia, Cardiologia, Laboratorio, Otorrinolaringologia, Ecografia, Ginecologia, Mastologia, Tomografias, Radiografias, MaternoInfantil, Internacion, TerapiaIntensiva, Urologia } from './serviceSections';

const data = [
    {
        icon: <svg className="fs-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.1 21.45L8.375 20q-.225-.425-.325-.875t-.1-.925q0-.575.163-1.137T8.625 16q.2-.275.3-.587t.1-.663q0-.4-.15-.75l-.3-.7q-.25-.475-.413-.975T8 11.3V7.5q0-.625-.437-1.062T6.5 6q-.525 0-.925.35t-.525.85q.85.325 1.4 1.087T7 10q0 1.25-.875 2.125T4 13t-2.125-.875T1 10q0-1 .575-1.775T3.05 7.15Q3.175 5.8 4.163 4.9T6.5 4q.175 0 .35.012t.35.063Q8.3 3.5 9.512 3.25T12 3q1.25 0 2.463.25t2.312.825q.175-.05.35-.063t.35-.012q1.375 0 2.363.9t1.112 2.25q.9.3 1.475 1.075T23 10q0 1.25-.875 2.125T20 13t-2.125-.875T17 10q0-.95.55-1.713t1.4-1.087q-.125-.5-.525-.85t-.95-.35q-.625 0-1.05.438T16 7.5v3.8q0 .525-.175 1.025t-.4.975q-.175.35-.313.7t-.137.75q0 .35.1.663t.3.587q.325.5.5 1.063t.175 1.137q0 .475-.112.925t-.313.875l-.725 1.45l-1.8-.9l.725-1.45q.125-.2.175-.425t.05-.475q0-.3-.1-.575t-.25-.525q-.35-.5-.537-1.1t-.188-1.225q0-.575.163-1.088t.437-1.012q.15-.35.288-.687T14 11.3V7.5q0-.6.188-1.137t.537-.988q-.65-.2-1.337-.288T12 5t-1.388.088t-1.337.287q.35.45.538.988T10 7.5v3.8q0 .35.125.7t.3.675q.25.5.425 1.013t.175 1.087q0 .625-.187 1.213T10.3 17.1q-.175.25-.262.525t-.088.575q0 .25.05.475t.175.425l.725 1.45z"></path></svg>,
        name: 'Ginecología',
        link: 'ginecologia',
        specialist: ['Liva, Gustavo', 'Ibarra, Sandra', 'Wendler, Gisela', 'Kapluk, Christian', 'Berecochea, Olga', 'Prividori, Gianela'],
        paragraph: 'En la Clínica Giuliani, nuestro servicio de Ginecología está dedicado a proporcionar una atención integral y personalizada para la salud de la mujer en todas las etapas de la vida. Nuestro equipo de ginecólogos altamente capacitados se enfoca en el diagnóstico, tratamiento y prevención de una amplia variedad de condiciones ginecológicas, asegurando el bienestar y la salud de nuestras pacientes.',
        section: <Ginecologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" fillRule="evenodd" d="m38.815 6l-9.126 9.126l2.622 1.748l4.482-4.481a1 1 0 0 1 1.414 1.414l-5.5 5.5l-.007-.007l-2.114 2.114A2 2 0 0 0 30 22.828v.456a2 2 0 0 1-.6 1.43l-3.65 3.573A6 6 0 0 1 21.551 30H12l15.7-15.7l-.007-.007L35.986 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM16.828 28h4.724a4 4 0 0 0 2.798-1.142L28 23.284v-.456A4 4 0 0 1 29.172 20l1.689-1.69l-2.606-1.736zM20 34H10v2h10zm8 0v2h4v-2zm-6 0h4v2h-4zm16 0h-4v2h4zM26.707 22.707a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414z" clipRule="evenodd"></path></svg>,
        name: 'Cirugía',
        link: 'cirugia',
        specialist: ['Torgoff, Federico', 'Rodriguez, Elio', 'Rodriguez, Cristian'],
        paragraph: 'En la Clínica Giuliani, nos enorgullece ofrecer un servicio de cirugía de primer nivel, comprometido con la excelencia médica y la atención integral del paciente. Nuestro equipo de cirujanos altamente capacitados y experimentados utiliza las últimas tecnologías y técnicas quirúrgicas para garantizar los mejores resultados posibles.',
        section: <Cirugia />,
        facilities: 'Nuestra clínica cuenta con instalaciones modernas y equipamiento de última generación, lo que nos permite realizar procedimientos con la máxima precisión y seguridad. Cada quirófano está diseñado para cumplir con los más altos estándares de higiene y eficiencia.',
        technology: ''
    },
    {
        icon: <svg className="fs-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path className="text-primary" fill="currentColor" d="M18.852 5.148a3.317 3.317 0 0 0-.96-2.183a3.333 3.333 0 1 0-4.713 4.714l-5.499 5.5a3.333 3.333 0 1 0-4.714 4.713c.606.606 1.39.918 2.183.96c.042.793.354 1.576.96 2.183a3.333 3.333 0 1 0 4.713-4.714l5.499-5.499a3.333 3.333 0 1 0 4.714-4.713a3.313 3.313 0 0 0-2.183-.961"></path></svg>,
        name: 'Traumatología',
        link: 'traumatologia',
        specialist: ['Paz, Rolando', 'Sanchez, Gonzalo'],
        paragraph: <>
            <i><strong>Especialistas en el cuidado de lesiones y trastornos musculoesqueléticos</strong></i>
            <p className='mt-3'>En la Clínica Giuliani, nuestro departamento de Traumatología está dedicado a proporcionar atención especializada para una amplia gama de lesiones y trastornos musculoesqueléticos. Nos enfocamos en el diagnóstico, tratamiento y rehabilitación de lesiones agudas y crónicas del sistema musculoesquelético.</p>
        </>,
        section: <Traumatologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-user-md text-primary fs-4"></i>,
        name: 'Clínica Médica',
        link: 'clinica-medica',
        specialist: ['Zinser, Betiana', 'Castillo, Elias Hernan'],
        paragraph: 'En la Clínica Giuliani, nuestro departamento de Clínica Médica se dedica a proporcionar atención médica integral para todas las edades. Nuestro equipo de médicos clínicos está comprometido con el diagnóstico, tratamiento y prevención de enfermedades comunes, así como con la promoción de la salud y el bienestar general de nuestros pacientes.',
        section: <ClinicaMedica />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-brain text-primary fs-4"></i>,
        name: 'Neurología',
        link: 'neurologia',
        specialist: ['Tomei, Mauricio'],
        paragraph: 'En la Clínica Giuliani, nuestro departamento de Neurología está dedicado a proporcionar atención integral para una variedad de trastornos del sistema nervioso. Ofrecemos diagnóstico, tratamiento y seguimiento para pacientes de todas las edades, desde niños hasta adultos mayores.',
        section: <Neurologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-brain text-primary fs-4"></i>,
        name: 'Tomografías',
        link: 'tomografias',
        specialist: ['Popolizio, Gabriel', 'Loto, Cecilia'],
        paragraph: 'En la Clínica Giuliani, ofrecemos un servicio de tomografías de última generación, diseñado para proporcionar imágenes de alta calidad y diagnósticos precisos. Nuestro equipo de profesionales altamente capacitados y nuestra avanzada tecnología garantizan una experiencia segura y eficiente.',
        section: <Tomografias />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-heart text-primary fs-4"></i>,
        name: 'Pediatría',
        link: 'pediatria',
        specialist: ['Meana, Julio'],
        paragraph: 'En la Clínica Giuliani, nos enorgullecemos de ofrecer un cuidado pediátrico de la más alta calidad, centrado en la salud y el bienestar de los niños desde su nacimiento hasta la adolescencia. Nuestro equipo de pediatras altamente capacitados y con amplia experiencia está dedicado a proporcionar una atención personalizada y compasiva a cada uno de nuestros pequeños pacientes.',
        section: <Pediatria />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-user-md text-primary fs-4"></i>,
        name: 'Internación',
        link: 'internacion',
        specialist: ['Castillo, Elias Hernan'],
        paragraph: 'En la Clínica Giuliani, nuestro servicio de internación, a cargo del Dr. Elías Hernán Castillo, está diseñado para proporcionar una atención integral y de alta calidad a todos nuestros pacientes. Nos esforzamos por ofrecer un entorno cómodo y seguro para la recuperación y el bienestar de cada individuo.',
        section: <Internacion />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-user-md text-primary fs-4"></i>,
        name: 'Terapia Intensiva',
        link: 'terapia-intensiva',
        specialist: ['Ramos, Mabel Florencia'],
        paragraph: 'En la Clínica Giuliani, nuestro servicio de Terapia Intensiva, a cargo de la Dra. Mabel Florencia Ramos, está dedicado a proporcionar cuidados críticos de alta calidad a pacientes en condiciones graves. Nuestro equipo de profesionales altamente capacitados y nuestras instalaciones avanzadas garantizan una atención excepcional en los momentos más críticos.',
        section: <TerapiaIntensiva />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-3 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 23v-2.025q-.625-.125-1.075-.562t-.575-1.088l-.325-2q-.15-.925.45-1.625T9 15v-1.175q-.25.1-.488.138T8 14q-2.5 0-4.25-1.75T2 8V7q0-2.5 1.75-4.25T8 1q1.25 0 2.125.875T11 4t-.875 2.125T8 7H6V5h2q.425 0 .713-.288T9 4t-.288-.712T8 3Q6.35 3 5.175 4.175T4 7v1q0 1.65 1.175 2.825T8 12q.425 0 .713-.288T9 11t-.288-.712T8 10H6V8h2q1.25 0 2.125.875T11 11v4h2v-4q0-1.25.875-2.125T16 8h2v2h-2q-.425 0-.712.288T15 11t.288.713T16 12q1.65 0 2.825-1.175T20 8V7q0-1.65-1.175-2.825T16 3q-.425 0-.712.287T15 4t.288.713T16 5h2v2h-2q-1.25 0-2.125-.875T13 4t.875-2.125T16 1q2.5 0 4.25 1.75T22 7v1q0 2.5-1.75 4.25T16 14q-.275 0-.513-.038T15 13.826V15q.925 0 1.525.7t.45 1.625l-.325 2q-.125.65-.575 1.088T15 20.975V23h-2v-2h-2v2z"></path></svg>,
        name: 'Urología',
        link: 'urologia',
        specialist: ['Esponda, Alvaro'],
        paragraph: 'En la Clínica Giuliani, nuestro servicio de Terapia Intensiva, a cargo de la Dra. Mabel Florencia Ramos, está dedicado a proporcionar cuidados críticos de alta calidad a pacientes en condiciones graves. Nuestro equipo de profesionales altamente capacitados y nuestras instalaciones avanzadas garantizan una atención excepcional en los momentos más críticos.',
        section: <Urologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={4}><path strokeLinejoin="round" d="M23 5c-1.146 4.46-1.146 7.773 0 9.938c1.719 3.247 5.7 5.042.574 9.373c-5.126 4.332-10.323.697-13.532.697c-3.208 0-6.02 3.613-6.02 8.992c0 3.586.66 6.586 1.978 9"></path><path strokeLinejoin="round" d="M29.984 5c-1.441 5.329-1.113 8.709.985 10.14c3.148 2.145 3.389-2.336 9.172.33c5.783 2.666 4.28 11.961.953 16.746C37.768 37 30.668 41.835 24.008 41c-6.659-.835-9.135-8.98-9.992-8.98c-.857 0-2.668.025-3.022 3.397c-.236 2.248.435 4.776 2.01 7.583"></path><path d="M35.645 28.29c-.578 1.712-1.555 3.048-2.93 4.01c-1.375.962-3.12 1.528-5.237 1.7"></path></g></svg>,
        name: 'Gastroenterología',
        link: 'gastroenterologia',
        specialist: ['Martinez, Cesar'],
        paragraph: 'En la Clínica Giuliani, nuestro departamento de Gastroenterología está dedicado a brindar atención médica especializada para el diagnóstico, tratamiento y prevención de enfermedades del sistema digestivo. Nuestro equipo de gastroenterólogos experimentados se compromete a ofrecer una atención integral y personalizada para asegurar la salud y el bienestar de nuestros pacientes.',
        section: <Gastroenterologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-vials text-primary fs-4"></i>,
        name: 'Laboratorio',
        link: 'laboratorio',
        specialist: ['Maluk, Daniel', 'Alvarez, Lourdes'],
        paragraph: 'En la Clínica Giuliani, nuestro laboratorio clínico se dedica a proporcionar servicios de diagnóstico de la más alta calidad. Nuestro equipo de profesionales altamente capacitados y nuestra tecnología de última generación nos permiten ofrecer resultados precisos y rápidos, fundamentales para la toma de decisiones médicas informadas.',
        section: <Laboratorio />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-heartbeat text-primary fs-4"></i>,
        name: 'Cardiología',
        link: 'cardiologia',
        specialist: ['Valdez, Julio'],
        paragraph: 'En la Clínica Giuliani, nuestro Servicio de Cardiología está dedicado a proporcionar atención médica de excelencia para el cuidado del corazón y del sistema cardiovascular. Contamos con un equipo de cardiólogos altamente calificados y tecnología de última generación para ofrecer diagnósticos precisos y tratamientos avanzados.',
        section: <Cardiologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <i className="fa fa-heartbeat text-primary fs-4"></i>,
        name: 'Cardio Infantil',
        link: 'cardio-infantil',
        specialist: ['Aguirre, Ernesto'],
        paragraph: <>
            <i><strong>Para los corazones más pequeños</strong></i>
            <p className='mt-3'>En la Clínica Giuliani, nuestro servicio de Cardio Infantil se dedica a proporcionar atención cardiológica de la más alta calidad para niños y adolescentes. Entendemos que cada corazón es único y merece un cuidado especializado y compasivo.</p>
        </>,
        section: <CardioInfantil />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="fs-2 text-primary" width="1em" height="1em" viewBox="0 0 56 56"><path fill="currentColor" d="M30.04 4.61c0-1.102-.938-2.04-2.04-2.04s-2.039.938-2.039 2.04v7.218c0 1.125.938 2.063 2.04 2.063c1.1 0 2.038-.938 2.038-2.063ZM14.944 17.851c.774.773 2.086.773 2.86 0c.797-.797.797-2.11 0-2.883l-5.063-5.11c-.773-.773-2.086-.796-2.883-.023c-.773.773-.773 2.086 0 2.883Zm22.97-2.649c-.774.774-.774 2.086 0 2.883c.796.773 2.132.773 2.905 0l5.11-5.11a2.066 2.066 0 0 0 0-2.906c-.774-.773-2.086-.773-2.883 0ZM51.39 30.04c1.101 0 2.039-.937 2.039-2.039s-.938-2.04-2.04-2.04h-7.218c-1.125 0-2.063.938-2.063 2.04s.938 2.039 2.063 2.039ZM4.609 25.961c-1.101 0-2.039.937-2.039 2.039s.938 2.039 2.04 2.039h7.242c1.125 0 2.062-.937 2.062-2.039s-.937-2.04-2.062-2.04ZM40.82 37.914c-.773-.773-2.109-.773-2.906 0c-.773.797-.773 2.11 0 2.883l5.133 5.133c.797.75 2.11.75 2.883 0c.796-.774.796-2.11 0-2.907Zm-30.75 5.11c-.796.773-.796 2.109-.023 2.882c.773.774 2.11.774 2.906.024l5.086-5.11a2.009 2.009 0 0 0 0-2.86c-.75-.796-2.086-.796-2.86 0Zm19.97 1.148c0-1.125-.938-2.063-2.04-2.063s-2.039.938-2.039 2.063v7.219c0 1.101.938 2.039 2.04 2.039c1.1 0 2.038-.938 2.038-2.04Z" /></svg>,
        name: 'Radiografías',
        link: 'radiografias',
        specialist: ['Pieretti, Paola', 'Rasguido, Martin'],
        paragraph: 'En la Clínica Giuliani, ofrecemos un servicio de radiografías de alta calidad, utilizando tecnología avanzada para proporcionar diagnósticos precisos y rápidos. Nuestro equipo de profesionales capacitados y nuestra moderna infraestructura garantizan una atención segura y eficiente.',
        section: <Radiografias />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 16C159 16 80 95 80 192v206.57a97.6 97.6 0 0 0 28 68.49A94.5 94.5 0 0 0 176 496c36.86 0 67.18-15.62 90.12-46.42c4.48-6 9.55-14.74 15.42-24.85c15.32-26.37 36.29-62.47 63.17-80.74c25.77-17.51 47.23-39.54 62-63.72C423.51 252.94 432 223.24 432 192c0-97-78.95-176-176-176m96 184a16 16 0 0 1-16-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.42c27.19-7.84 58.4-6.72 64.28-6.42a48 48 0 0 1 38.6 75.9c-.3.41-.61.81-.95 1.2c-16.55 19-36 45.48-38.46 55a16 16 0 0 1-30.94-8.14c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 0 0 239.82 240h-.88c-16.6-.89-45.89.8-62.94 8.31V304a16 16 0 0 1-32 0V184c0-57.35 50.24-104 112-104s112 46.65 112 104a16 16 0 0 1-16 16"></path></svg>,
        name: 'Otorrinolaringología',
        link: 'otorrinolaringologia',
        specialist: ['Obregon, Luis'],
        paragraph: 'En nuestra Clínica, el departamento de Otorrinolaringología está dedicado a brindar atención especializada para el diagnóstico y tratamiento de enfermedades y trastornos del oído, nariz y garganta. Nuestro equipo de otorrinolaringólogos altamente capacitados está comprometido con la salud y el bienestar de nuestros pacientes, proporcionando cuidados de alta calidad y soluciones personalizadas.',
        section: <Otorrinolaringologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22.5q-.375 0-.7-.175t-.525-.475q-3.025-.55-5.337-2.7T9.2 13.85q-2.15 1-3.512 2.9T4.05 20.975q-.05.425-.337.725T3 22t-.712-.312t-.238-.738q.275-3.025 2.075-5.462T8.75 11.85q-.525-2.875-.088-5.187T10.5 2.925q.05-.6.475-1.012T12 1.5q.625 0 1.063.438T13.5 3t-.437 1.063T12 4.5h-.1q-.05 0-.125-.025q-.55.625-.875 1.538t-.425 2.037q.5-.5 1.163-.862t1.462-.563q.75-.2 1.613-.262t1.812.012q.2-.2.45-.288T17.5 6q.625 0 1.063.438T19 7.5t-.437 1.063T17.5 9q-.35 0-.687-.162t-.538-.463q-.825-.05-1.587.013t-1.363.262q-.975.325-1.537.95t-.713 1.6q.7-.125 1.188-.162T14.4 11q.2-.25.488-.375t.612-.125q.625 0 1.063.438T17 12t-.437 1.063t-1.063.437q-.325 0-.612-.125T14.4 13q-1.575 0-2.075.038T11.2 13.2q.325.85 1.275 1.3t2.475.5q.725.05 1.563-.025t1.687-.225q.2-.35.55-.55t.75-.2q.625 0 1.063.438T21 15.5t-.437 1.063T19.5 17q-.25 0-.462-.075t-.413-.225q-.85.15-1.662.238t-1.538.087t-1.375-.075t-1.225-.225q.95 1.225 2.313 2.063T18 19.9q.2-.2.463-.3t.537-.1q.625 0 1.063.438T20.5 21t-.437 1.063T19 22.5"></path></svg>,
        name: 'Alergología',
        link: 'alergologia',
        specialist: ['Longoni, Natalia'],
        paragraph: 'En la Clínica Giuliani, nuestro servicio de Alergología está dedicado a proporcionar diagnóstico, tratamiento y manejo integral de alergias y enfermedades inmunológicas. Contamos con un equipo de alergólogos altamente capacitados que utilizan las técnicas más avanzadas para ofrecer soluciones personalizadas y efectivas a nuestros pacientes.',
        section: <Alergologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.48 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.214-1.988c.476-.052.637-.187.76-.342c.197-.247.343-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875"></path><path d="m18 26.5l.5 2l1.5 3V37l3.5 3l4.5-2.5v-6l2-3v-2L24 25zm7 5.5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></path><path d="M19 23.064v1.807l.149-.057C20.253 24.399 21.872 24 24 24s3.747.4 4.851.814l.149.057v-1.807a8 8 0 0 0-.851-.378C27.253 22.351 25.872 22 24 22s-3.253.35-4.149.686a8 8 0 0 0-.851.378m10.406.24h-.001zM30 22.5l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 0 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.002-.001l.001-.002l.005-.003l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58C20.253 20.399 21.872 20 24 20s3.747.4 4.851.814a9 9 0 0 1 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-11.406 4.804h.001l.002-.002h.002m-.005.002l.005-.003l.043-.03a4 4 0 0 1 .37-.213a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 1 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395a6 6 0 0 1 .37.214l.048.032h-.001l-.002-.002H29.4s0-.002.382-.513L30 26.5m-1.012.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372M18.01 16.993a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601"></path><path d="M18.642 12.066A14 14 0 0 1 33.9 15.1a1 1 0 0 1-1.415 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1c1.3-1.3 2.844-2.33 4.542-3.034"></path></g></svg>,
        name: 'Ecografías',
        link: 'ecografias',
        specialist: ['Galeano, Raul', 'Rodriguez, Elio', 'Rodriguez, Cristian', 'Liva, Gustavo'],
        paragraph: 'En la Clínica Giuliani, nuestro servicio de Ecografías ofrece diagnósticos por imágenes de alta precisión para una variedad de condiciones médicas. Utilizamos tecnología de vanguardia para proporcionar imágenes detalladas y claras que ayudan a nuestros médicos a evaluar y diagnosticar eficazmente diversas patologías.',
        section: <Ecografia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.48 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.214-1.988c.476-.052.637-.187.76-.342c.197-.247.343-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875"></path><path d="m18 26.5l.5 2l1.5 3V37l3.5 3l4.5-2.5v-6l2-3v-2L24 25zm7 5.5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></path><path d="M19 23.064v1.807l.149-.057C20.253 24.399 21.872 24 24 24s3.747.4 4.851.814l.149.057v-1.807a8 8 0 0 0-.851-.378C27.253 22.351 25.872 22 24 22s-3.253.35-4.149.686a8 8 0 0 0-.851.378m10.406.24h-.001zM30 22.5l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 0 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.002-.001l.001-.002l.005-.003l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58C20.253 20.399 21.872 20 24 20s3.747.4 4.851.814a9 9 0 0 1 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-11.406 4.804h.001l.002-.002h.002m-.005.002l.005-.003l.043-.03a4 4 0 0 1 .37-.213a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 1 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395a6 6 0 0 1 .37.214l.048.032h-.001l-.002-.002H29.4s0-.002.382-.513L30 26.5m-1.012.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372M18.01 16.993a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601"></path><path d="M18.642 12.066A14 14 0 0 1 33.9 15.1a1 1 0 0 1-1.415 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1c1.3-1.3 2.844-2.33 4.542-3.034"></path></g></svg>,
        name: 'Mastología',
        link: 'mastologia',
        specialist: ['Berecochea, Olga', 'Prividori, Gianela'],
        paragraph: 'Atención especializada para la salud mamaria. Nuestros expertos mastólogos están comprometidos con el diagnóstico, tratamiento y prevención de enfermedades de las mamas, ofreciendo un cuidado integral y personalizado para cada paciente.',
        section: <Mastologia />,
        facilities: '',
        technology: ''
    },
    {
        icon: <svg className="fs-2 text-primary" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M8.978 8.354a49.1 49.1 0 0 1 30.045.002c2.483.799 3.58 3.548 2.644 5.875l-6.362 15.81l-.07.174c-.227.57-.48 1.206-.868 1.693c-.503.634-1.184.986-2.112 1.086a1 1 0 1 1-.214-1.988c.476-.052.637-.187.76-.342c.197-.247.343-.61.631-1.327l6.38-15.853c.542-1.35-.123-2.813-1.401-3.224a47.1 47.1 0 0 0-28.821-.002c-1.278.411-1.944 1.874-1.401 3.224l6.38 15.862c.286.712.431 1.072.626 1.319c.123.155.283.29.76.341a1 1 0 1 1-.217 1.989c-.927-.101-1.607-.454-2.11-1.088c-.385-.486-.638-1.12-.865-1.69l-.07-.176l-6.36-15.81c-.936-2.328.162-5.077 2.645-5.875"></path><path d="m18 26.5l.5 2l1.5 3V37l3.5 3l4.5-2.5v-6l2-3v-2L24 25zm7 5.5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"></path><path d="M19 23.064v1.807l.149-.057C20.253 24.399 21.872 24 24 24s3.747.4 4.851.814l.149.057v-1.807a8 8 0 0 0-.851-.378C27.253 22.351 25.872 22 24 22s-3.253.35-4.149.686a8 8 0 0 0-.851.378m10.406.24h-.001zM30 22.5l.6-.8a1 1 0 0 1 .4.8v4.289a5 5 0 0 1-.84 2.773l-.656.985A3 3 0 0 0 29 32.211v3.768a5 5 0 0 1-4 4.9V41a.992.992 0 0 0 1.499.853l2.118-1.257a4.394 4.394 0 0 1 5.986 1.475l.249.405a1 1 0 0 1-1.704 1.048l-.249-.404a2.394 2.394 0 0 0-3.261-.804l-2.118 1.257C25.525 44.757 23 43.32 23 41v-.121a5 5 0 0 1-4-4.9v-3.768a3 3 0 0 0-.504-1.664l-.656-.985A5 5 0 0 1 17 26.79V22.5a1 1 0 0 1 .4-.8l.6.8l-.6-.8l.002-.001l.001-.002l.005-.003l.01-.007a2 2 0 0 1 .127-.088a6 6 0 0 1 .34-.205a9 9 0 0 1 1.264-.58C20.253 20.399 21.872 20 24 20s3.747.4 4.851.814a9 9 0 0 1 1.264.58a6 6 0 0 1 .467.293l.01.007l.005.004h.001l.002.002zm-11.406 4.804h.001l.002-.002h.002m-.005.002l.005-.003l.043-.03a4 4 0 0 1 .37-.213a3 3 0 0 0 .492 1.395l.656.985A5 5 0 0 1 21 32.21v3.768a3 3 0 1 0 6 0V32.21a5 5 0 0 1 .84-2.773l.656-.985a3 3 0 0 0 .492-1.395a6 6 0 0 1 .37.214l.048.032h-.001l-.002-.002H29.4s0-.002.382-.513L30 26.5m-1.012.558a8 8 0 0 0-.84-.372C27.254 26.351 25.873 26 24 26s-3.253.35-4.149.686a8 8 0 0 0-.839.372M18.01 16.993a10 10 0 0 1 12.008.02a1 1 0 0 1-1.204 1.598a8 8 0 0 0-9.606-.017a1 1 0 1 1-1.198-1.601"></path><path d="M18.642 12.066A14 14 0 0 1 33.9 15.1a1 1 0 0 1-1.415 1.415a12 12 0 0 0-16.97 0A1 1 0 0 1 14.1 15.1c1.3-1.3 2.844-2.33 4.542-3.034"></path></g></svg>,
        name: 'Sector Maternal',
        link: 'materno-infantil',
        specialist: ['Galeano, Raul', 'Rodriguez, Elio', 'Rodriguez, Cristian', 'Liva, Gustavo'],
        paragraph: 'En la Clínica Giuliani, nuestra Sala Materno Infantil está dedicada a brindar la mejor atención a madres y recién nacidos, con un enfoque centrado en el bienestar y la comodidad durante el embarazo, el parto y el postparto. Nuestro equipo de profesionales altamente capacitados y nuestras modernas instalaciones garantizan una experiencia segura y reconfortante.',
        section: <MaternoInfantil />,
        facilities: '',
        technology: ''
    },
]


export const dataServices = data.map((data, i) => {
    return {
        id: i,
        ...data
    }
})


// Castillo en Clinica Medica