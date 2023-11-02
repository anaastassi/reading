
//sender to  mail
function sendMail(nameId,phoneId) {
    let elementName = document.getElementById(nameId);
    let elementPhone = document.getElementById(phoneId);
    sendToTelegram(elementName, elementPhone, "Prana public page ")

}

function sendToTelegram(elementName, elementPhone, from) {
    let data =
        'name="' + elementName.value + '"&phone="' + elementPhone.value + '"&from="' + from + '"';
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "php/telegram.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // после получения какого-либо ответа от сервера
    xhr.onload = () => {
        if (xhr.status !== 200) {
            // выводим ошибку в консоль
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            return;
        }
        // получаем ответ сервера
        const response = xhr.response;
        console.log(response);
        window.location = 'thank-you.html';
    };
    // срабатывает, когда запрос не может быть выполнен (например, нет соединения или не корректный URL)
    xhr.onerror = () => {
        // происходит, только когда запрос совсем не получилось выполнить
        console.log(`Ошибка при выполнении запроса`);
    };

    xhr.send(data);
    elementName.value = "";
    elementPhone.value = "";




}


