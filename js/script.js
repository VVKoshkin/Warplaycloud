const checkIfHeaderNeeded = () => {
    const headerHeight = $('.header').height();
    const windowScrollPosition = $(window).scrollTop();
    if (windowScrollPosition > headerHeight) {
        $('.header').show();
    } else {
        $('.header').hide();
    }
}

$(() => {
    // checkIfHeaderNeeded();
    $('#menu-button').click(() => {
        $('.header').toggle();
    });
    // $(window).on('scroll', checkIfHeaderNeeded);
});