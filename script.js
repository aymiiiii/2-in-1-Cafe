window.addEventListener("scroll", function () {
    const mainNav = document.getElementById("main-nav");
    const logo = document.getElementById("logo");
    const homeSection = document.getElementById("home");
    const homeSectionHeight = homeSection.offsetHeight;

    const logoPath = "Images/";

    // Check if we've scrolled past the home section
    if (window.scrollY > homeSectionHeight) {
        mainNav.classList.add("nav-dark");

        if (logo.src.indexOf(logoPath + "Logo2.png") === -1) {
            logo.src = logoPath + "Logo2.png";
            logo.style.transform = "translateY(30px)"; 
        }
    } else {
        mainNav.classList.remove("nav-dark");

        if (logo.src.indexOf(logoPath + "Logo.png") === -1) {
            logo.src = logoPath + "Logo.png";
            logo.style.transform = "translateY(-20px)";
            logo.style.transform = "translateX(30px)";
            console.log("Changed logo to Logo.png and reset position");
        }
    }
});
