// window.onload
var qrWindow = document.getElementById('qrWindow');
var btn = document.getElementById('btn');
// var image = document.getElementById()

btn.onclick = function () {
    qrWindow.style.display = 'block';
}

qrWindow.onclick = function (event) {
    if (event.target == qrWindow) {
        qrWindow.style.display = "none";
    }
}

function changeBackground(string) {
    if (string == 'stripes') {
        document.getElementById("1").style.backgroundImage = 'url(stripes.png)';
    } else {
        document.getElementById("1").style.backgroundColor = string;
        document.getElementById("1").style.backgroundImage = 'none';
    }
}


// var arr = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6'];
// mobile();
// function mobile() {
//     arr.forEach(element => {
//         document.getElementById(element).style.clear = 'none';
//         document.getElementById(element).style.float = 'none';
//     });
//     document.getElementById('colorNav').style.textAlign = 'center';
// }

// var mq = window.matchMedia('@media all and (min-width: 700px)');
// if(mq.matches) {
//     alert('hej');
// } else {
//     // the width of browser is less then 700px
// }