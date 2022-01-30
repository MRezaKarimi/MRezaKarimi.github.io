var [clock1, clock2, clock3] = [0, 0, 0];

var intervalId = setInterval(function() {
    $('#clock1').text(clock1);
    $('#clock2').text(clock2);
    $('#clock3').text(clock3);
    clock1++;
    clock2 += 2;
    clock3 += 3;
}, 1000);

function sendMessage(sender, receiver) {
    if (sender < receiver) {
        showLTRMessageAnimation(sender);
    } else {
        showRTLMessageAnimation(sender);
    }

    receiveMessage(receiver, { 'timestamp': eval(`clock${sender}`) });
}

function receiveMessage(receiver, message) {
    setTimeout(function() {
        showAlert(receiver, 'receive');
        if (message.timestamp >= eval(`clock${receiver}`)) {
            showAlert(receiver, 'sync');
            window['clock' + receiver] = message.timestamp + 1;
        }
    }, 1000);
}