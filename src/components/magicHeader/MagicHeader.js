import React from 'react'
import "./magicHeader.css"
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';

export default function MagicHeader() {

    function whatsapp() {
        const telefono = "3113784303";
        const mensaje = "Hola. Quiero mas informacion.";
        const url = `https://api.whatsapp.com/send?phone=${telefono}&texto=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    }

    const [activeIndex, setActiveIndex] = useState(0);

    const handleActiveLink = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src='logo.png' alt='logo' className='logo' />
                    <div className='magicCont'>
                        <div className="navigation">
                            <ul>
                                <li className={`list ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleActiveLink(0)}>
                                    <a href="#">
                                        <span className="icon">
                                            <i class="bi bi-house"></i>
                                        </span>
                                        <span className="text">Home</span>
                                    </a>
                                </li>
                                <li className={`list ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleActiveLink(1)}>
                                    <a onClick={whatsapp}>
                                        <span className="icon">
                                            <i class="bi bi-whatsapp"></i>
                                        </span>
                                        <span className="text">Contacto</span>
                                    </a>
                                </li>
                                <li className={`list ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleActiveLink(2)}>
                                    <Link to='/registro'>
                                        <a href="#">
                                            <span className="icon">
                                                <i class="bi bi-person-add"></i>
                                            </span>
                                            <span className="text">Registrarse</span>
                                        </a>
                                    </Link>
                                </li>
                                <li className={`list ${activeIndex === 3 ? 'active' : ''}`} onClick={() => handleActiveLink(3)}>
                                    <Link to='/login'>
                                        <a href="#">
                                            <span className="icon">
                                                <i class="bi bi-box-arrow-in-right"></i>
                                            </span>
                                            <span className="text">Iniciar Sesion</span>
                                        </a>
                                    </Link>
                                </li>
                                <div className="indicator"></div>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 lista">
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0 lista">
                            <Link to='/carrito-contents'>
                                <li className="nav-item itemLista">
                                    <a className="nav-link" href="#"><ShoppingCartIcon className='negro' /></a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
