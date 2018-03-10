// window.onload
var qrWindow = document.getElementById('qrWindow');
var btn = document.getElementById('btn');
// var image = document.getElementById()''

btn.onclick = function () {
    qrWindow.style.display = 'block';
}

qrWindow.onclick = function(event) {
    if (event.target == qrWindow) {
        qrWindow.style.display = "none";
    }
}