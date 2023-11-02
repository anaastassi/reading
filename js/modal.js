
$(document).ready(function () {
    $("#phone").inputmask({mask: "+38 (999) 999-99-99",
    definitions: {
        '*': {
          validator: "^[0-9a-f]"
        }
      },
    onincomplete: function() {
        isvalid = false
      },
      oncomplete: function() {
        isvalid = true
      }});
    
});
let insertedSecondPhone = document.querySelector('#insertedSecondPhone');

function validation(phone) {
    let btn2 = document.getElementById("clickBtnFormBlock");
    if (phone.includes("_")){

        btn2.setAttribute("onclick","");
        btn2.setAttribute("href","#clickBtnFormBlock");

        insertedSecondPhone.innerText = insertedSecondPhone.innerText +" -> щось не так з номером :("
        insertedSecondPhone.style.color = "red";
        return false;
    }else {
        btn2.setAttribute("onclick","sendMail('form-name','phone')");
        // btn2.setAttribute("href","thank-you.html");
        insertedSecondPhone.style.color = "green";
    }
    return true
}

function insertSecondPhone(thisis) {
    insertedSecondPhone.innerText = document.querySelector('#phone').value
    validation(document.querySelector('#phone').value)
}
