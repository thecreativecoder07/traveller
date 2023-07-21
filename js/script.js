// open and close navbar
function openNav()
{
    document.getElementById("mySidenav").style.width = "350px";

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
