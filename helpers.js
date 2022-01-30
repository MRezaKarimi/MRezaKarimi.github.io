function showAlert(receiver, type) {
    $(`#${type}-${receiver}`).removeClass('hide').addClass('show');
    $(`#${type}-${receiver}`).delay(2000).slideUp(200, function() {
        $(this).removeClass('show').addClass('hide');
        $(this).removeAttr("style");
    });
}

function showLTRMessageAnimation(sender) {
    $(`.proc-${sender}-ltr`).css('color', 'orange');
    anime({
        targets: `.proc-${sender}-ltr`,
        duration: 1000,
        left: ['0px', '150px'],
        easing: 'linear',
        direction: 'normal',
    });
    $(`.proc-${sender}-ltr`).delay(1000).slideUp(200, function() {
        $(this).removeAttr("style");
    });
}

function showRTLMessageAnimation(sender) {
    $(`.proc-${sender}-rtl`).css('color', 'orange');
    anime({
        targets: `.proc-${sender}-rtl`,
        duration: 1000,
        left: ['150px', '0px'],
        easing: 'linear',
        direction: 'normal',
        autoPlay: false,
    });
    $(`.proc-${sender}-rtl`).delay(1000).slideUp(200, function() {
        $(this).removeAttr("style");
    });
}