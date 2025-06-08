// Function that forces the viewport to the top of the page. 
export const scrollTopBtn = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Function that forces the viewport to the top of a specifc section (based on id) offseting based on the header height. 
export const scrollSectionBtn = (id) => { 
    const element = document.getElementById(id); 
    const header = document.getElementById("headerId");

    const headerOffset = (element.getBoundingClientRect().top + window.pageYOffset) - header.offsetHeight;

    window.scrollTo({ 
        top: headerOffset, 
        behavior: "smooth"
    });
} 