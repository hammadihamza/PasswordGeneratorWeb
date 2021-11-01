const qrBtn=document.getElementById('GenQrcodeBtn');
var QR = document.getElementById("passwordDisplay");
var qrcode= new QRCode(document.getElementById("qrcode"));
//Cette fonction utilise la bibliothéque qrcode.js

qrBtn.addEventListener('click',function GenQRCode(){
  var data=QR.value;
  qrcode.makeCode(data);
const passwordDisplay = document.getElementById('passwordDisplay')
passwordDisplay.blur();

});
