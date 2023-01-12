function About(){
        return(
                <>
                 <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">Software Engineer with ability to learn and collaborate in rapidly changing environments and compositions. Worked through 1000+ hours of Bootcamp structure.   </p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">Learning Angular,React.js JavaScript,Node.js,python and high demanded DataBase. Eager to tackle web development/design challenges to achieve lasting impact on user experience. </p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="https://docs.google.com/document/d/13MuRDM35rZ0635YZYfi3dKZFaKaqHNpm0GGyHTJnJfY/edit">
                        <i class="fas fa-download me-2"></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
                
                </>
        );
}

export default About;