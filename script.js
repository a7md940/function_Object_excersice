function fillForm (firstName, lastName, nationality, country, phoneNumber, eMail){
    return {
        "firstName": firstName,
        "lastName": lastName,
        "nationality": nationality,
        "country": country,
        "phoneNumber": phoneNumber,
        "eMail": eMail
    }
}



/** Inputs Declaration
 * 
 */
show = document.getElementById("show");
//submit.onclick = fillForm(fName,lName,nationality,country,phNum,mail);
show.onclick = function(){
    let fName = document.getElementById("firstName").value,
    lName = document.getElementById("lastName").value,
    nationality = document.getElementById("nationality").value,
    country = document.getElementById("country").value,
    phNum = document.getElementById("phone").value,
    mail = document.getElementById("email").value,
    submit = document.getElementById("submit");

    let objectReturn = fillForm(fName,lName,nationality,country,phNum,mail);
    let contentBox = document.getElementById("content"),
        fShow = document.getElementById("firstNameShow"),
        lShow = document.getElementById("lastNameShow"),
        nShow = document.getElementById("nationalityShow"),
        cShow = document.getElementById("countryShow"),
        pShow = document.getElementById("phoneShow"),
        mShow = document.getElementById("mailShow");

    
   // contentBox.innerHTML =  "<span>The Application Filled with these data :</span>"
    fShow.innerHTML = "<span>First Name: </span>" + objectReturn.firstName;
    lShow.innerHTML = "<span>Last Name: </span>" + objectReturn.lastName;
    nShow.innerHTML = "<span>Nationality: </span>" + objectReturn.nationality;
    cShow.innerHTML = "<span>Country: </span>" + objectReturn.country;
    pShow.innerHTML = "<span>Phone Number: </span>" + objectReturn.phoneNumber;
    mShow.innerHTML = "<span>E-Mail: </span>" + objectReturn.eMail;
    console.log(objectReturn);
}

