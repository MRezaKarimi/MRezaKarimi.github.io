let animation = anime({
    targets: '.message',
    // translateX: 200,
    duration: 1000,
    left: ['0px', '150px'],
    // right: ['150px', '0px'],
    easing: 'linear',
    direction: 'normal',
    autoplay: false,
});


function play() {
    animation.restart();
};

var clock1 = 0;
var clock2 = 0;
var clock3 = 0;

var intervalId = setInterval(function() {
    $('#clock1').text(clock1);
    $('#clock2').text(clock2);
    $('#clock3').text(clock3);
    clock1++;
    clock2 += 2;
    clock3 += 3;
}, 1000);

// Send message from sender to receiver
function sendMessage(sender, receiver) {
    console.log('send');
    receiveMessage(receiver, { 'timestamp': eval('clock' + sender) });
}

function receiveMessage(receiver, message) {

    if (message.timestamp >= eval('clock' + receiver)) {
        showAlert(receiver);
        window['clock' + receiver] = message.timestamp + 1;
    }
}

document.querySelector('.message').onclick = play;