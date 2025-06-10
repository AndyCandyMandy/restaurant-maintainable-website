import { useState } from "react";

import "./reviewCarousel.css"; 

const reviewSlides = [
    {
        reviewDesc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie."`,
        reviewName: "- John Doe",
        takenFrom: "Google Reviews",
    }, 
    {
        reviewDesc: `"Amazing food, service, and dining area! Our waitress, Cindy, was nice and accomodating! My favourite dish were the spring rolls paired with their special sauce. The dining area was cozy, bright, and clean. Will come back again!"`,
        reviewName: "- Taylor Lee",
        takenFrom: "Yelp Reviews",
    }, 
    {
        reviewDesc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu leo risus. Suspendisse et purus ut arcu pellentesque molestie. Nam sollicitudin quam nulla, non tempus ante vestibulum non."`,
        reviewName: "- Jane Doe",
        takenFrom: "Google Reviews",
    }, 
    {
        reviewDesc: `"LOVE THEIR SPECIALS, SO CHEAP, SO DELICIOUS! I ORDER EVERYDAY AFTER WORK!"`,
        reviewName: "- Matt Brook",
        takenFrom: "Google Reviews",
    },
]; 

function ReviewCarousel() { 
    const [reviewIndex, setReviewIndex] = useState(0); 
    const currentReview = reviewSlides[reviewIndex];

    // Function increments the index (by addition) except when the index exceeds the review slide length (sets the index at the start)
    const nextReview = () => {
        if (reviewIndex >= reviewSlides.length - 1) {
            setReviewIndex(0);
        } 
        else {
            setReviewIndex(reviewIndex + 1);
        } 
    }; 

    // Function increments the index (by subtraction) except when the index preceeds the review slide length (sets the index at the max slide length)
    const prevReview = () => {
        if (reviewIndex === 0) {
            setReviewIndex(reviewSlides.length - 1);
        } 
        else {
            setReviewIndex(reviewIndex - 1);
        }
    }; 

    return ( 
        <section className="reviewSection"> 
            <div className="reviewContent">
                <h1 className="reviewHeader">Our Happy Customers</h1>  
                
                <div className="reviewDisplay">


                    <div className="reviewSlide" id="slide"> 
                        <p className="reviewDesc">{currentReview.reviewDesc}</p> 
                        <p className="reviewName">{currentReview.reviewName}</p> 
                        <p className="reviewFrom">{currentReview.takenFrom}</p>
                    </div> 
                    

                </div>
                <button className="reviewButtonPrev" onClick={prevReview}>&#10094;</button> 
                <button className="reviewButtonNext" onClick={nextReview}>&#10095;</button>

                <div className="reviewDotContainer"> 
                    {reviewSlides.map((slide, index) => ( 
                        <span className={`reviewDot ${index === reviewIndex ? "active" : ""}`} key={index} onClick={() => setReviewIndex(index)}></span> 
                    ))}
                </div>
                    
            </div> 
        </section>  

        
    );
}

export default ReviewCarousel;