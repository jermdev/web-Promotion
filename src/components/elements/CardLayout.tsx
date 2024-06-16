import { ReactNode } from "react";

interface CardLayoutProps {
    children: ReactNode;
    claseName?: string;
}

export const CardLayout = ({children, claseName}: CardLayoutProps): JSX.Element => {
    return ( 
        <div className={`container bg-white shadow-lg rounded-lg overflow-hidden my-4  ${claseName}`}>
            {children}
        </div>
    );
}
 
