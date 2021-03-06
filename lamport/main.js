if (screen.width < 1000) {
    window.alert('This website is not optimized for mobile devices.\nFor better experience, use laptop/pc device.');
}

var [clock1, clock2, clock3] = [0, 0, 0];

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

var p1speed = 1;
var p2speed = 2;
var p3speed = 3;

if (params.p1speed != null && params.p1speed != '') {
    p1speed = params.p1speed * 1;
}
if (params.p2speed != null && params.p2speed != '') {
    p2speed = params.p2speed * 1;
}
if (params.p3speed != null && params.p3speed != '') {
    p3speed = params.p3speed * 1;
}

var intervalId = setInterval(function() {
    clock1 += p1speed;
    clock2 += p2speed;
    clock3 += p3speed;
    $('#clock1').text(clock1);
    $('#clock2').text(clock2);
    $('#clock3').text(clock3);
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