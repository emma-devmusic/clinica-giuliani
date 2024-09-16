import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
}


export const ContentLayout = ({ children, title }: Props) => {
    return (
        <div className="content-layout">
            <h3 className="content-layout__title mt-2">{title}</h3>
            <hr />
            <div className="content-layout__content">
                {children}
            </div>
        </div>
    );
};
