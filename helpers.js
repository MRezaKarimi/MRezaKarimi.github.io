function showAlert(procNum) {
    $('#alert-' + procNum).removeClass('hide').addClass('show');
    $("#alert-" + procNum).delay(2000).slideUp(200, function() {
        $(this).removeClass('show').addClass('hide');
        $(this).removeAttr("style");
    });
}