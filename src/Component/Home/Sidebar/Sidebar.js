import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt,faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import omarwebdeveloper from '../../../images/omarwebdeveloper.png';
import { HashLink } from 'react-router-hash-link';

const Sidebar = () => {
    return (
        <div>
            
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <div className="topImg">
                <img src={omarwebdeveloper} alt=""/>
            </div>
            <h3 className="Sname"> Md. Omar Ali </h3>
            <hr></hr>
            <li>
                <HashLink to="#/home" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                </HashLink >
            </li>
                <li>
                    <HashLink to="/about" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>About</span> 
                    </HashLink >
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="#/blog" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Blog</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Contact</span> 
                    </Link>
                </li>
             
            </ul>
            
        </div>
        </div>
    );
};

export default Sidebar;