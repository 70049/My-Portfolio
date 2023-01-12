import React from 'react';
import logo from '../images/mainimage.jpg';
function Masthead(){
        return (
                <>

<header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
              
                <img class="masthead-avatar mb-5" src={logo}   alt="..." />
               
                <h1 class="masthead-heading text-uppercase mb-0">Rajeev Kumar</h1>
                
              
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0">Full-Stack Web App Devloper</p>
            </div>
        </header>
                </>
        );

}



export default Masthead;