// отправка заявки 
$(document).ready(function() {
    $('#form').submit(function(){ // проверяет на пустоту заполненых полей, Атрибут html5 required не проходит (не поддерживается сафари)
        if(document.form.name.value == '' || document.email.value == '' ){
            valid = false;
            return valid;
        } 
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            $('.js-over-thank-you').fadeIN();
            $(this).find('input').val('');
            $('#form').trigger('reset');
        });
        return false;
    });
});

// Закрыть попап "спасибо"

$('.js-close-thank-you').click(function(){ //по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e){// по клику в не попав
    var popus = $('.popus');
    if (e.terget!=popus[0]&&popus.has(e.target).lenght === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

