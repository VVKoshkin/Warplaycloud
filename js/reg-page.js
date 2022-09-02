$(() => {
    setPageMode('reg') // default?
    $('.reg-option-head').click((event) => {
        const elem = event.target;
        setPageMode($(elem).data('type'))
    });

    $('input[type="submit"]').click((event) => {
        event.preventDefault();
        const elem = event.target;
        var type = $(elem).parents('form').data('type')
        formSubmit(type);
    });
});

const setPageMode = (type) => {
    $('.reg-option-head').removeClass('active')
    $(`.reg-option-head[data-type='${type}']`).addClass('active')
    $('.form').addClass('hidden')
    $(`.form[data-type='${type}']`).removeClass('hidden')
    if (type == 'reg') {
        $('.continue-as').hide()
    } else {
        $('.continue-as').show()
    }
}

const formSubmit = (type) => {
    if (type == 'reg') {
        window.open('confirmation.html', '_self');
    }
}

const log = (elem) => {
    console.log(elem)
}