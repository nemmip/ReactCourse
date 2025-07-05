import React, {ReactNode} from 'react';
import Logo from "./Logo.tsx";

const NavBar : React.FC<{
    children: ReactNode;
}> = ({children})=> {


    return (
        <nav className="nav-bar">
            <Logo/>
            {children}
        </nav>

    );
}

export default NavBar;