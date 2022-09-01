$(() => {
    setPageMode('reg') // default?
    $('.reg-option-head').click((event) => {
        const elem = event.target;
        setPageMode($(elem).data('type'))
    });
});

const setPageMode = (type) => {
    $('.reg-option-head').removeClass('active')
    $(`.reg-option-head[data-type='${type}']`).addClass('active')
    $('.form').addClass('hidden')
    $(`.form[data-type='${type}']`).removeClass('hidden')
    if(type=='reg') {
        $('.continue-as').hide()
    } else {
        $('.continue-as').show()
    }
}

const log = (elem) => {
    console.log(elem)
}