import React, {ReactNode} from 'react';
import Logo from "./Logo.tsx";
import Search from "./Search.tsx";

const NavBar : React.FC<{
    children: ReactNode;
}> = ({children})=> {


    return (
        <nav className="nav-bar">
            <Logo/>
            <Search/>
            {children}
        </nav>

    );
}

export default NavBar;