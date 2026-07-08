document.addEventListener("DOMContentLoaded", function(){


document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();


let inputs = document.querySelectorAll("#bookingForm input");


let name = inputs[0].value;
let phone = inputs[1].value;
let address = inputs[2].value;


let dress = document.querySelector("#bookingForm select").value;


let bust = inputs[3].value;
let waist = inputs[4].value;
let hip = inputs[5].value;
let shoulder = inputs[6].value;
let sleeve = inputs[7].value;
let length = inputs[8].value;
let height = inputs[9].value;



// Delivery Calculation

let distance = document.getElementById("distance").value;

let fuelPrice = document.getElementById("fuelPrice").value;


let deliveryCharge = 0;


if(distance && fuelPrice){

let fuelUsed = distance / 35;

let fuelCost = fuelUsed * fuelPrice;

deliveryCharge = fuelCost + 100;

}




let message = `
🌸 DILAX PETALS 🌸

Fashion Design & Beauty Care

👤 Customer Name:
${name}

📱 WhatsApp Number:
${phone}

📍 Address:
${address}

👗 Dress Type:
${dress}


📏 Body Measurements:

Bust: ${bust}
Waist: ${waist}
Hip: ${hip}
Shoulder: ${shoulder}
Sleeve Length: ${sleeve}
Dress Length: ${length}
Height: ${height}



🚚 Delivery Details:

Distance:
${distance} KM

Delivery Charge:
Rs. ${deliveryCharge.toFixed(2)}



💰 Payment Policy:

50% Advance Payment Required.

Balance payment after completion / delivery.



Thank you for choosing

🌸 DILAX PETALS 🌸

Vinayagapuram & Thirukkovil
`;



let whatsappNumber = "94758947516";


let url =
"https://api.whatsapp.com/send?phone=" +
whatsappNumber +
"&text=" +
encodeURIComponent(message);



window.open(url,"_blank");


});






// Delivery Calculator

window.calculateDelivery = function(){


let distance = document.getElementById("distance").value;

let fuelPrice = document.getElementById("fuelPrice").value;



if(distance=="" || fuelPrice==""){

document.getElementById("deliveryResult").innerHTML =
"Please enter distance and fuel price";

return;

}



let fuelUsed = distance / 35;

let fuelCost = fuelUsed * fuelPrice;

let deliveryCharge = fuelCost + 100;



document.getElementById("deliveryResult").innerHTML =

"🚚 Delivery Charge: Rs. "
+ deliveryCharge.toFixed(2)
+
"<br>⛽ Fuel Used: "
+ fuelUsed.toFixed(2)
+ " Litres";


};







// Dress Image Preview

let dressImage = document.getElementById("dressImage");


if(dressImage){


dressImage.addEventListener("change", function(){


let image = this.files[0];


if(image){


let reader = new FileReader();


reader.onload = function(e){


let preview = document.getElementById("imagePreview");


preview.src = e.target.result;

preview.style.display = "block";


};


reader.readAsDataURL(image);


}


});


}



});
window.addEventListener("load",function(){

document.getElementById("loader").style.display="none";

});
/* Scroll Reveal Animation */

let sections = document.querySelectorAll("section");


window.addEventListener("scroll", function(){


sections.forEach(function(section){


let position = section.getBoundingClientRect().top;


let screenHeight = window.innerHeight;


if(position < screenHeight - 100){

section.classList.add("show");

}


});


});