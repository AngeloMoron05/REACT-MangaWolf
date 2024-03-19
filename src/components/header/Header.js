import React from 'react'
import "./header.css"
import HomeIcon from '@mui/icons-material/Home';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SubjectIcon from '@mui/icons-material/Subject';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LoginIcon from '@mui/icons-material/Login';

export default function Header() {
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src='logo.png' alt='logo' className='logo'/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <HomeIcon/>
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <PlayArrowIcon/>
                                <a className="nav-link" href="#">Tutoriales</a>
                            </li>
                            <li className="nav-item">
                                <SubjectIcon/>
                                <a className="nav-link" href="#">Referencias</a>
                            </li>
                            <li className="nav-item">
                                <CreateNewFolderIcon/>
                                <a className="nav-link" href="#">Recursos</a>
                            </li>
                            <li className="nav-item">
                                <LocalPhoneIcon/>
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <PersonAddAlt1Icon/>
                                <a className="nav-link" href="#">Registrarse</a>
                            </li>
                            <li className="nav-item">
                                <LoginIcon/>
                                <a className="nav-link" href="#">Iniciar sesión</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
