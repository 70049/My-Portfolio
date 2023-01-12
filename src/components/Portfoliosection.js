function Portfoliosection(){
        return(
                <>
                 <section class="page-section portfolio" id="portfolio">
            <div class="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div class="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="https://careers.google.com/jobs/dist/img/meta/og-image.ad9235200b79feb205f6.jpg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="https://play-lh.googleusercontent.com/0DvZgWRGbQXqFS-PgcDXY4f85Xu9oPnmyW-i9smEwFTnxzDxU3ikItFtIo6KXv8kXRc" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="data:image/png;base64,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" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 4--> */}
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="https://traveltradejournal.com/wp-content/uploads/2022/12/Air-India.jpg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 5--> */}
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="https://www.lambdatest.com/blog/wp-content/uploads/2018/11/Microservice-Design.jpg" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 6--> */}
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="https://www.pngitem.com/pimgs/m/251-2518074_web-design-company-portfolio-website-design-hd-png.png" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
                </>
        );
}

export default Portfoliosection;