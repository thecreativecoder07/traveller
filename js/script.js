// open and close navbar
function openNav()
{
    document.getElementById("mySidenav").style.width = "300px";

}
function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";

}
// form validation
function validateLocation()
{
    var location = document.forms["myForm"]["location"].value;
    var regLoc = /^[A-Za-z]+$/;

    if (!regLoc.test(location))
    {
        document.getElementById("locationError").innerText = "Please Select A Valid Location";

    }
    else
    {
        document.getElementById("locationError").innerText = "";        

    }
    

}
function validatePhone()
{
    var phone = document.forms["myForm"]["phone"].value;
    
    if(isNaN(phone))
    {
        document.getElementById("phoneError").innerText = "Please Enter A Valid Number";
    }
    else if(phone.length != 10)
    {
        document.getElementById("phoneError").innerText = "Number Must be In 10 Digit";

    }
    else{
        document.getElementById("phoneError").innerText = "";
    }
}
function validatePeople()
{
    var numofpeople = document.forms["myForm"]["numofpeople"].value;
    var regPeople = /^([1-9]|[1-9][0-9]|100)$/;  //range of number from 1 - 100

    if(!regPeople.test(numofpeople))
    {
        document.getElementById("numofpeopleError").innerText = "Number Must be under 100";
    }
    else
    {
        document.getElementById("numofpeopleError").innerText = "";
    }
}
function validateForm()
{
    validateLocation();
    validatePhone();
    validatePeople();

    var locationErr = document.getElementById("locationError").innerText;
    var phoneErr = document.getElementById("phoneError").innerText;
    var numofpeopleErr = document.getElementById("numofpeopleError").innerText;

    if(locationErr || phoneErr || numofpeopleErr)
    {
        return false;
    }
    else
    {
        return true;
    }


}

// scroll to top of screen js
const scrolltop = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', ()=>
{
    if(window.scrollY > 300)
    {
        scrolltop.style.display = "block";
    }
    else{
        scrolltop.style.display = "none";

    }
});

scrolltop.addEventListener('click', ()=>
{
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    });
});

// reveal elements on scroll
const observer = new IntersectionObserver((entries)=>
{
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('active');
        }
        else{
            entry.target.classList.remove('active');
        }
    });
});

const hiddenELements = document.querySelectorAll('.hidden');
hiddenELements.forEach((element)=> observer.observe(element)) ;


// feedback carousel

$(".owl-carousel").owlCarousel({
    items: 4, // Number of items to display
    loop: true, // Enable loop
    margin: 10, // Space between items
    responsiveClass: true,
    responsive: {
        0: {
            items: 1 // Number of items to display at different screen widths
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        }
    }
});

