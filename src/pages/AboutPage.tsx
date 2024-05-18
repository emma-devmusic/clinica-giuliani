
import { About, Feature, PageHeader, Team } from '../components'

export const AboutPage = () => {
    return (
        <>
            <PageHeader title='Sobre Nosotros' />
            <About />
            <Feature />
            <Team totalDoctors={4} />
        </>
    )
}
