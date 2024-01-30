var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slide index
    slideIndex++;

    // If the index is greater than the number of slides, reset to the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 2 seconds (adjust the interval as needed)
    setTimeout(showSlides, 8000);
}