import { Team } from '../components';
import { PageHeader } from '../components/pageHeader/PageHeader';


export const TeamPage = () => {
    return (
        <>
            <PageHeader title='Equipo' />
            <Team totalDoctors={'all'}/>
        </>
    )
}
