
import { About, Feature, PageHeader, Team } from '../components'
import { GallerySection } from '../components/gallery/GallerySection'

export const AboutPage = () => {
    return (
        <>
            <PageHeader title='Sobre Nosotros' />
            <About />
            <Feature />
            <GallerySection />
            <Team totalDoctors={4} />
        </>
    )
}
