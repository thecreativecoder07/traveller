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
function validateDestination()
{
    let destination = document.forms["myForm"]["destination"].value;
    if(destination == "")
    {
        document.getElementById("destinationError").innerText = "Please Select A Valid Destination";
    }
    else
    {
        document.getElementById("destinationError").innerText = "";
    }
}
function validateLocation()
{
    let location = document.forms["myForm"]["location"].value;
    let regLoc = /^[A-Za-z]+$/;

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
    let phone = document.forms["myForm"]["phone"].value;
    
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
    let numofpeople = document.forms["myForm"]["numofpeople"].value;
    let regPeople = /^([1-9]|[1-9][0-9]|100)$/;  //range of number from 1 - 100

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
    validateDestination();

    let locationErr = document.getElementById("locationError").innerText;
    let phoneErr = document.getElementById("phoneError").innerText;
    let numofpeopleErr = document.getElementById("numofpeopleError").innerText;    
    let destinationErr = document.getElementById("destinationError").innerText;

    if(locationErr || phoneErr || numofpeopleErr || destinationErr)
    {
        return false;
    }
    else
    {
        alert('Thankyou For Choosing Us. Will Get Back To You ASAP');
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


// form validation of feedback form
function validateFname()
{
    let name = document.forms["feedbackForm"]["fname"].value;
    let regEx = /^[A-Za-z]+$/;

    if (!regEx.test(name))
    {
        document.getElementById("feedNameErr").innerText = "Please Enter Valid Name";

    }
    else
    {
        document.getElementById("feedNameErr").innerText = "";        

    }
}
function validatetext()
{
    let text = document.forms["feedbackForm"]["ftext"].value;
    let regEx = /^[A-Za-z]+$/;

    if (!regEx.test(text))
    {
        document.getElementById("feedTextErr").innerText = "Please Enter Valid Message";

    }
    else
    {
        document.getElementById("feedTextErr").innerText = "";        

    }
}
function validateFfile()
{
    let feedbackFile = document.getElementById("ffile");
    let allowedExtensions = /\.(jpeg|jpg|png)$/i;
    let fileSize = 100 * 1024; // 100KB
    let selectedFile = feedbackFile.files[0];

    
    if(allowedExtensions.test(feedbackFile))
    {
        document.getElementById("feedFileErr").innerText = "Please Choose png, jpg or jpeg File";
    }
    else if(selectedFile.size > fileSize)
    {
        document.getElementById("feedFileErr").innerText = "File is too big select under 100kb";
    }
    else
    {
        document.getElementById("feedFileErr").innerText = "";
    }
}
function valFeedbackForm()
{
    validateFname();
    validatetext();
    validateFfile();

    let nameErr = document.getElementById("feedNameErr").innerText;
    let textErr = document.getElementById("feedTextErr").innerText;
    let fileErr = document.getElementById("feedFileErr").innerText;

    if(nameErr || textErr || fileErr)
    {
        return false;
    }
    else
    {
        
        alert('Message Sent successfully');
        return true;
    }


}