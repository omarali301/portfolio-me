import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Sidebar from '../Sidebar/Sidebar';


const Home = () => {
    return (
        <div id="home" className="container-fluid">
            <div className="row">
                <div className="col-md-2 abIg">  <Sidebar/></div>
                <div className="col-md-10">
                <Header/>
                <About/>
                <Services/>
                <Blog/>
                <Contact/>
                <Footer/>
                
                </div>
            </div>
        
   
           
        </div>
    );
};

export default Home;