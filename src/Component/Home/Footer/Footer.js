import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container footer">
            <div className="row m-5">
                <div className="col-md-4">
                    <ul>
                        <h5 className="text-center">about us</h5>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos 
                            sed laborum amet, repudiandae corrupti ipsum officia voluptates beatae
                             officiis optio.</p>

                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                    <h5 className="p-2">Our project</h5>
                        <li><a href="https://omarali301.github.io/Discover-Fly/">Booking flight</a></li>
                        <li><a href="https://omarali301.github.io/third-website/#">Feature App</a></li>
                        <li><a href="https://omarali301.github.io/fourth-project/">Pnada website</a></li>
                        <li><a href="https://omarali301.github.io/Sajid-Bank/">Deposit Bank</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                    <h5 className="p-2">Our Services</h5>
                    <li><a href="https://omarali301.github.io/Discover-Fly/">Booking flight</a></li>
                        <li><a href="https://omarali301.github.io/third-website/#">Feature App</a></li>
                        <li><a href="https://omarali301.github.io/fourth-project/">Pnada website</a></li>
                        <li><a href="https://omarali301.github.io/Sajid-Bank/">Deposit Bank</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;