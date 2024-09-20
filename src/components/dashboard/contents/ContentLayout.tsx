import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
}


export const ContentLayout = ({ children, title }: Props) => {
    return (
        <div className="content-layout" style={{maxWidth: '100vw'}}>
            <h3 className="content-layout__title mt-2">{title}</h3>
            <hr />
            <div className="content-layout__content mt-4">
                {children}
            </div>
        </div>
    );
};
