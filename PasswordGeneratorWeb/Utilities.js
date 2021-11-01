//Cette Fonction sert à afficher ou cacher le mdp
function TogglePWD() {
    var x = document.getElementById("passwordDisplay");
    if (x.type === "password") {
      x.type = "text";
    }
     else {
      x.type = "password";
    }
  }


  //Cette Fonction sert à copier le mdp généré dans le presse-papier
  function COPYClipBoard() {
    var copyText = document.getElementById("passwordDisplay");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied!");
  }

  //Clear button
  const btn=document.getElementById("reset");
  const pwd=document.getElementById("passwordDisplay");
  const togglepwdcheck=document.getElementById("togglepwdcheck");
  btn.addEventListener('click', function vider(){
    pwd.value="";
    var QR = document.getElementById("qrcode");
    QR.style.visibility='hidden';
    togglepwdcheck.checked=false;
  })