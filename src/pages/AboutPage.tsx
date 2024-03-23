
import { About, Feature, PageHeader, Team } from '../components'

export const AboutPage = () => {
    return (
        <>
            <PageHeader />
            <About />
            <Feature />
            <Team totalDoctors={4} />
        </>
    )
}
