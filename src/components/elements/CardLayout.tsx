import { ReactNode } from "react";

interface CardLayoutProps {
    children: ReactNode;
    className?: string;
}

export const CardLayout = ({children, className}: CardLayoutProps): JSX.Element => {
    return ( 
        <div className={`container bg-secondary shadow-lg rounded-lg overflow-hidden my-4  ${className}`}>
            {children}
        </div>
    );
}
 
