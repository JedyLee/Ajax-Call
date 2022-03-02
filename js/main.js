var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    var formInfo = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        ghanacard : document.getElementById('ghanacard').value,
        height : document.getElementById('height').value,
        gender : document.getElementById('sex').value,
        maritalStatus : document.getElementById('maritalstatus').value,
        date : document.getElementById('date').value,
        image : document.getElementById('image').files[0]
    }

    sendDataToBackEnd(formInfo);
})


function sendDataToBackEnd(data){
    var xhttp = new XMLHttpRequest();
    const reader = new FileReader()

    reader.onload = function () {
        data.image = reader.result;
        xhttp.onreadystatechange = function () {
            document.getElementById('contact-wrap').innerHTML = this.response;
        }
        xhttp.open("POST", "processor.php", true)
        xhttp.send(JSON.stringify(data));
    }

    reader.readAsDataURL(data.image)
}