import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeatureService from '../FeatureService/FeatureService'
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Testimonials from './../Testimonials/Testimonials';
import Blogs from './../Blogs/Blogs';
import Doctors from '../Doctor/Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer'




const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
           <FeatureService/>
          <MakeAppoinment/>
          <Testimonials/>
          <Blogs/>
          <Doctors/>
          <Contact/>
          <Footer/>
        </div>
    );
};

export default Home;