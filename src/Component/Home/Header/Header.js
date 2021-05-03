import React from 'react';
import headerImg from '../../../images/webdeveloper.png';
import './Header.css';


const Header = () => {
    return (
        <div className="container-fluid bg-color">
        <div className="row pt-5">
            <div className="col-md-5 spacing">
                <h1 id="home"> Hi! I am <span className="">Md Omar Ali</span></h1>
                <p>To develop career in any recognized organization through my aptitude,
                     hard work, enthusiasm, sincerity, diligence, dedication and determination
                      where creativity and sincerity are appreciated and flourish opportunities
                       are available to be professional.</p>
                     <button className="btn btn-primary">Hire Me</button>
            </div>
            <div className="col-md-6 headerImg">
                <img src={headerImg} alt=""/>
            </div>
        </div>
    </div>
    );
};

export default Header;