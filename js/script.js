$(() => {
    const sliderChangePicDelaySec = 5;
    $('#menu-button').click(() => {
        $('.header').show();
    });
    $('.header-close').click(() => {
        $('.header').hide();

    })
    setSliderSize();
    setInterval(changePicture, 1000 * sliderChangePicDelaySec);
    $('window').resize(setSliderSize);
});

const setSliderSize = () => {
    $('.slider').height($('.slider-image').height());
    $('.slider-gradient').height($('.slider-image').height());
}

const getNextImage = (curNum, sliderElement) => {
    const allImageArr = ['1.jfif', '2.jfif', '3.jfif', '4.jfif']
    let nextNum = parseInt(curNum) + 1;
    if (nextNum >= allImageArr.length)
        nextNum = 0;
    $(sliderElement).data('image-num', nextNum);
    return `../img/slider/${allImageArr[nextNum]}`
}

const changePicture = () => {
    const sliderElem = ('.slider');
    const curNum = $(sliderElem).data('image-num')
    const nextImageLink = getNextImage(curNum, sliderElem)
    $('.slider-gradient').css('background-color', 'rgba(0,197,255, 0.7)')
    setTimeout(() => {
        $(sliderElem).find('.slider-image').attr('src',nextImageLink)
        $('.slider-gradient').css('background-color', 'rgba(0,197,255, 0)')
        setSliderSize();
    }, 500);
}

const log = (elem) => {
    console.log(elem)
}