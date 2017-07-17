import React                    from 'react';
import { Link }                 from 'react-router-dom';
import Navbar                   from './Navbar';
import Logo                     from './Logo';
import Navigation               from './Navigation';
import logo                     from './logo.svg';
import Follow                   from './Follow';
import NavbarContent            from './NavbarContent';

export default function NavbarContainer (props) {
    return (
        <Navbar>
            <Link to="/">
                <Logo>
                    <img src={logo} alt="logo" width="100%" height="100%"/>
                </Logo>
            </Link>
            <NavbarContent>
                <Navigation path={props.location.pathname} />
                <Follow />
            </NavbarContent>    
        </Navbar>
    );
}