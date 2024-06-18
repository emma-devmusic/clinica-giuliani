import './pageHeader.css'

export const PageHeader = ({ title }: { title: string; }) => {

    return (
        <div className='page-header mb-5 '>
            <div className='page-header-background'>
            <div className="container-fluid relative py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h2 className="display-3 text-white mb-3 animated slideInDown">{title}</h2>

                    {/* <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb text-uppercase mb-0">
                        <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                        <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                        <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
                    </ol>
                </nav> */}
                </div>
            </div>
            </div>
        </div>
    )
}
