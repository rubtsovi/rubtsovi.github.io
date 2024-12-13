$(document).ready(function () {
    var $formInstance = $('#contact-form');

    $formInstance.on('submit', function (event) {
        event.preventDefault();
        var dataToSend = $formInstance.serializeArray();
        $.ajax({
            type: 'post',
            data: {data: dataToSend, sendmail: '1'},
            url: '/sendmail.php',
            success: function (response) {
                console.log(response);
                if('OK' === response){
                    $formInstance.after('Wiadomość została wysłana. Dziękujemy').remove();
                }
            }
        })
    })
})