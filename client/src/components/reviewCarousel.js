import "./reviewCarousel.css"; 

function ReviewCarousel() { 
    

    return ( 
        <section className="reviewSection"> 
            <div className="reviewContent">
                <h1 className="reviewHeader">Our Happy Customers</h1>  
                
                <div className="reviewDisplay">



                    <div className="reviewSlide"> 
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie."
                        </p> 
                        <p className="reviewName"> - Taylor Lee</p> 
                        <p className="reviewFrom">Google Reviews</p>
                    </div>

                    
                    
                </div>
                <button className="reviewButtonPrev">&#10094;</button> 
                <button className="reviewButtonNext">&#10095;</button>

                

            </div> 
        </section>  

        
    );
}

export default ReviewCarousel;