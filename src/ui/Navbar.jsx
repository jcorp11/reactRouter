import {  NavLink } from 'react-router-dom';


export const Navbar = () => {





    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active text-primary':'' }` }
                        to="/"
                    >
                       Home
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active text-primary':'' }` }
                        to="/nosotros"
                    >
                       Nosotros
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active text-primary':'' }` }
                        to="/productos"
                    >
                        Productos
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active text-primary':'' }` }
                        to="/contactos"
                    >
                        Contactos
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active text-primary':'' }` }
                        to="/red"
                    >
                        Redireccionar
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active text-primary':'' }` }
                        to="/blablabla"
                    >
                        Error
                    </NavLink>
                </div>
            </div>

            
        </nav>
    )
}